import {Component, Input} from '@angular/core';
import { Angular2Apollo } from 'angular2-apollo';
import SchemaService from './schema_service';
import gql from 'graphql-tag';
import { ActivatedRoute } from '@angular/router';
import template from './gql-list.html';

@Component({
  selector: 'gql-list',
  template
})
export default class GqlListComponent {
  @Input() queryName : String;
  querySchema: Object;
  queryFields: Array<Object>;

  constructor(schemaService: SchemaService, apolloClient: Angular2Apollo) {
    this.schemaService = schemaService;
    this.apolloClient = apolloClient;
    this.schemaService.getSchema().subscribe( (schema) => {
      console.log(schema);
      console.log(this.queryName);
      this.querySchema = schema.queryType.fields.find((field) => field.name === this.queryName);
      this.queryFields = this.querySchema.type.ofType ? this.querySchema.type.ofType.fields : [];
    });
  }

  executeQuery() {
    this.apolloClient.watchQuery(this.buildQuery()).subscribe({next: ({data}) => {
      this.queryResults = data[this.queryName];
      console.log(data[this.queryName]);
    }});
  }

  buildQuery() {
    return {
      query: gql`
        query getResults {
          ${this.queryName} {
            ${this.scalarFields().map((field) => field.name).join(', ')}
          }
        }
      `,
      forceFetch: true
    };
  }

  scalarFields() {
    return this.queryFields ? this.queryFields.filter((field) => field.type.kind === "SCALAR") : [];
  }

}
