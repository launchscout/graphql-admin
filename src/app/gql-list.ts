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
  @Input() queryBuilder: GraphQLBuilder;
  @Input() fieldPath: Array<String>;

  apolloClient: Angular2Apollo;
  queryResults: Array<Object>;

  constructor(schemaService: SchemaService, apolloClient: Angular2Apollo) {
    this.apolloClient = apolloClient;
  }

  executeQuery(args) {
    this.apolloClient.watchQuery(this.queryBuilder.buildQuery(args)).subscribe({next: ({data}) => {
      this.queryResults = this.queryBuilder.extractResults(data);
    }});
  }

}
