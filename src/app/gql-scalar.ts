import {Component, Input} from '@angular/core';
import { Angular2Apollo } from 'angular2-apollo';
import SchemaService from './schema_service';
import gql from 'graphql-tag';
import { ActivatedRoute } from '@angular/router';
import template from './gql-scalar.html';
import GqlArgsForm from './gql-args-form';
import QueryBuilder from './query_builder';

@Component({
  selector: 'gql-scalar',
  template,
  directives: [GqlArgsForm]
})
export default class GqlScalarComponent {
  @Input() querySchema: Object;
  apolloClient: Angular2Apollo;

  constructor(apolloClient: Angular2Apollo) {
    this.apolloClient = apolloClient;
  }

  queryBuilder() {
    if (!this._queryBuilder) {
      this._queryBuilder = new QueryBuilder(this.querySchema);
    }
    return this._queryBuilder;
  }
  executeQuery(queryArguments) {
    this.apolloClient.watchQuery(this.queryBuilder().buildQuery(queryArguments)).subscribe({next: ({data}) => {
      this.queryResults = data[this.queryBuilder().queryName()];
    }});
  }

}
