import {Component, Input} from '@angular/core';
import { Angular2Apollo } from 'angular2-apollo';
import SchemaService from './schema_service';
import gql from 'graphql-tag';
import { ActivatedRoute } from '@angular/router';
import template from './gql-scalar.html';

@Component({
  selector: 'gql-scalar',
  template
})
export default class GqlScalarComponent {
  @Input() queryName : String;

  constructor(schemaService: SchemaService, apolloClient: Angular2Apollo) {
    this.schemaService = schemaService;
    this.apolloClient = apolloClient;
    this.schemaService.getSchema().subscribe( (schema) => {
      this.querySchema = schema.queryType.fields.find((field) => field.name === this.queryName);
      console.log(this.querySchema);
      this.queryFields = this.querySchema.type.fields;
    });
  }

  executeQuery(queryArguments) {
    console.log(queryArguments);
    this.apolloClient.watchQuery(this.buildQuery(queryArguments)).subscribe({next: ({data}) => {
      this.queryResults = data[this.queryName];
      console.log(data[this.queryName]);
    }});
  }

  declareArgumentVariables() {
    let declarations = this.querySchema.args.map((arg) => {
      return `$${arg.name}: ${arg.type.kind == 'NON_NULL' ? `${arg.type.ofType.name}!` : arg.type.name}`
    });
    return `(${declarations.join(', ')})`;
  }

  argumentVariables() {
    const argVariables = this.querySchema.args.map((arg) => `${arg.name}: $${arg.name}`);
    return `(${argVariables.join(', ')})`;
  }
  buildQuery(args) {
    return {
      query: gql`
        query getResults${this.declareArgumentVariables()} {
          ${this.queryName}${this.argumentVariables()} {
            ${this.scalarFields().map((field) => field.name).join(', ')}
          }
        }
      `,
      variables: args,
      forceFetch: true
    };

  }

  scalarFields() {
    return this.queryFields ? this.queryFields.filter((field) => field.type.kind === "SCALAR") : [];
  }

}
