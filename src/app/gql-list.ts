import {Component, Input} from '@angular/core';
import { Angular2Apollo } from 'angular2-apollo';
import SchemaService from './schema_service';
import gql from 'graphql-tag';
import { ActivatedRoute } from '@angular/router';
import template from './gql-list.html';
import QueryBuilder from './query_builder';

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

  queryBuilder() {
    if (!this._queryBuilder) {
      this._queryBuilder = new QueryBuilder(this.querySchema);
    }
    return this._queryBuilder;
  }

  executeQuery() {
    this.apolloClient.watchQuery(this.queryBuilder().buildQuery()).subscribe({next: ({data}) => {
      this.queryResults = data[this.queryBuilder().queryName()];
    }});
  }

}
