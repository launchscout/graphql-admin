import {Component, Input} from '@angular/core';
import { Angular2Apollo } from 'angular2-apollo';
import SchemaService from './schema_service';
import gql from 'graphql-tag';
import { ActivatedRoute } from '@angular/router';
import GqlArgsForm from './gql-args-form';
import GraphQLBuilder from './graphql_builder';

@Component({
  selector: 'gql-scalar',
  templateUrl: 'gql-scalar.html',
  directives: [GqlArgsForm]
})
export default class GqlScalarComponent {
  @Input() queryBuilder: GraphQLBuilder;
  @Input() fieldPath: Array<String>;

  apolloClient: Angular2Apollo;
  queryResults: Object;

  constructor(schemaService: SchemaService, apolloClient: Angular2Apollo) {
    this.apolloClient = apolloClient;
  }

  executeQuery(queryArguments) {
    this.apolloClient.watchQuery(this.queryBuilder.buildQuery(queryArguments)).subscribe({next: ({data}) => {
      this.queryResults = this.queryBuilder.extractResults(data);
    }});
  }

}
