import {Component, Input} from '@angular/core';
import { Angular2Apollo } from 'angular2-apollo';
import SchemaService from './schema_service';
import gql from 'graphql-tag';
import { ActivatedRoute } from '@angular/router';
import template from './gql-list.html';
import GraphQLBuilder from './graphql_builder';

@Component({
  selector: 'gql-list',
  template
})
export default class GqlListComponent {
  @Input() querySchema: Object;
  queryFields: Array<Object>;

  constructor(schemaService: SchemaService, apolloClient: Angular2Apollo) {
    this.apolloClient = apolloClient;
  }

  graphQLBuilder() {
    if (!this._graphQLBuilder) {
      this._graphQLBuilder = new GraphQLBuilder(this.querySchema);
    }
    return this._graphQLBuilder;
  }

  executeQuery() {
    this.apolloClient.watchQuery(this.graphQLBuilder().buildQuery()).subscribe({next: ({data}) => {
      this.queryResults = data[this.graphQLBuilder().queryName()];
    }});
  }

}
