import gql from 'graphql-tag';

export default class QueryBuilder {
  querySchema: Object;

  constructor(private querySchema: Object) {}

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

  buildQuery(args) {
    return {
      query: gql`
        query getResults${this.declareArgumentVariables()} {
          ${this.queryName()}${this.argumentVariables()} {
            ${this.scalarFields().map((field) => field.name).join(', ')}
          }
        }
      `,
      variables: args,
      forceFetch: true
    };

  }

  scalarFields() {
    return this.queryFields() ? this.queryFields().filter((field) => field.type.kind === "SCALAR") : [];
  }
}
