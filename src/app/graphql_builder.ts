import gql from 'graphql-tag';

export default class GraphQLBuilder {

  constructor(private querySchema: any, private parents?: Array<String>) {}

  queryName() {
    return this.querySchema.name;
  }

  isList() {
    return this.querySchema.type.kind === 'LIST';
  }

  queryFields() {
    return this.isList() ? this.querySchema.type.ofType.fields : this.querySchema.type.fields;
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

  buildInnerQuery(parents?: Array<String>) {
    if (parents && parents.length > 0) {
      return `
        ${parents[0]} {
          ${this.buildInnerQuery(parents.slice(1))}
        }
      `;
    }
    return `
      ${this.queryName()}${this.argumentVariables()} {
        ${this.scalarFields().map((field) => field.name).join(', ')}
      }
    `;
  }

  buildQuery(args?) {
    const queryString = `
        query getResults${this.declareArgumentVariables()} {
          ${this.buildInnerQuery(this.parents.slice(0, -1))}
        }`;
    console.log(queryString);
    return {
      query: gql`${queryString}`,
      variables: args,
      forceFetch: true
    };

  }

  extractResults(payload) {
    return this.findResults(payload[this.parents[0]], this.parents.slice(1));
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
