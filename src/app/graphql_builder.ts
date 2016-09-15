import gql from 'graphql-tag';

export default class GraphQLBuilder {

  querySchema;

  constructor(private schemaService: any, private fieldPath: Array<String>) {
    this.querySchema = this.schemaService.getQuerySchema(fieldPath);
  }

  queryName() {
    return this.querySchema.name;
  }

  args() {
    console.log(this.querySchema.args);
    return this.querySchema.args;
  }

  isList() {
    return this.querySchema.type.kind === 'LIST' ||
      (this.querySchema.type.kind == 'OBJECT' && this.isConnectionQuery());
  }

  isConnectionQuery() {
    return this.querySchema.type.name && this.querySchema.type.name.match(/Connection$/)
  }

  queryFields() {
    if (this.isConnectionQuery()) {
      return this.nodeType().fields;
    } else if (this.isList()) {
      return this.querySchema.type.ofType.fields;
    } else {
      return this.querySchema.type.fields;
    }
  }

  nodeType() {
    return this.schemaService.getQuerySchema(this.fieldPath.concat(['edges', 'node'])).type;
  }

  declareArgumentVariables() {
    if (!this.querySchema.args || this.querySchema.args.length === 0) { return ''; }
    let declarations = this.querySchema.args.map((arg) => {
      return `$${arg.name}: ${arg.type.kind === 'NON_NULL' ? `${arg.type.ofType.name}!` : arg.type.name}`
    });
    return `(${declarations.join(', ')})`;
  }

  argumentVariables() {
    if (!this.querySchema.args || this.querySchema.args.length === 0) { return ''; }
    const argVariables = this.querySchema.args.map((arg) => `${arg.name}: $${arg.name}`);
    return `(${argVariables.join(', ')})`;
  }

  buildInnerQuery(fieldPath?: Array<String>) {
    if (fieldPath && fieldPath.length > 0) {
      return `
        ${fieldPath[0]} {
          ${this.buildInnerQuery(fieldPath.slice(1))}
        }
      `;
    }
    return `
      ${this.queryName()}${this.argumentVariables()} {
        ${ this.fieldQuery() }
      }
    `;
  }

  fieldQuery() {
    return this.isConnectionQuery() ?
      this.buildConnectionFieldsQuery() :
      this.buildScalarFieldsQuery();
  }

  buildConnectionFieldsQuery() {
    return `
    edges {
      node {
        ${this.buildScalarFieldsQuery()}
      }
    }
    `
  }

  buildScalarFieldsQuery() {
    return this.scalarFields().map((field) => field.name).join(', ');
  }

  buildQuery(args?) {
    const queryString = `
        query getResults${this.declareArgumentVariables()} {
          ${this.buildInnerQuery(this.fieldPath.slice(0, -1))}
        }`;
    return {
      query: gql`${queryString}`,
      variables: args,
      forceFetch: true
    };

  }

  extractResults(payload) {
    const queryResults = this.findResults(payload[this.fieldPath[0]], this.fieldPath.slice(1));
    if (this.isConnectionQuery()) {
      return queryResults.edges.map( edge => edge.node );
    } else {
      return queryResults;
    }
  }

  findResults(payload, paths) {
    if (paths.length > 0) {
      return this.findResults(payload[paths[0]], paths.slice(1));
    } else {
      return payload;
    }
  }
  buildMutation(args) {
    return {
      mutation: gql`
        mutation ${this.queryName()}${this.declareArgumentVariables()} {
          ${this.queryName()}${this.argumentVariables()} {
            ${this.scalarFields().map((field) => field.name).join(', ')}
          }
        }
      `,
      variables: args,
    };
  }

  scalarFields() {
    return this.queryFields() ? this.queryFields().filter((field) => field.type.kind === "SCALAR") : [];
  }
}
