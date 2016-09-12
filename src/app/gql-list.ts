import {Component, Input} from '@angular/core';
import { Angular2Apollo } from 'angular2-apollo';
import SchemaService from './schema_service';
import gql from 'graphql-tag';
import { ActivatedRoute } from '@angular/router';
import GraphQLBuilder from './graphql_builder';

@Component({
  selector: 'gql-list',
  templateUrl: 'gql-list.html'
})
export default class GqlListComponent {
  @Input() querySchema: Object;
  @Input() fieldPath: Array<String>;
  queryFields: Array<Object>;

  constructor(schemaService: SchemaService, apolloClient: Angular2Apollo) {
    this.apolloClient = apolloClient;
  }

  graphQLBuilder() {
    if (!this._graphQLBuilder) {
      this._graphQLBuilder = new GraphQLBuilder(this.querySchema, this.fieldPath);
    }
    return this._graphQLBuilder;
  }

  executeQuery(args) {
    this.apolloClient.watchQuery(this.graphQLBuilder().buildQuery(args)).subscribe({next: ({data}) => {
      this.queryResults = this._graphQLBuilder.extractResults(data);
    }});
  }

}
