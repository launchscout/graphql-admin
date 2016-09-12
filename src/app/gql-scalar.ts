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
  @Input() querySchema: Object;
  @Input() fieldPath: Array<String>;

  apolloClient: Angular2Apollo;

  constructor(apolloClient: Angular2Apollo) {
    this.apolloClient = apolloClient;
  }

  graphQLBuilder() {
    if (!this._graphQLBuilder) {
      this._graphQLBuilder = new GraphQLBuilder(this.querySchema, this.fieldPath);
    }
    return this._graphQLBuilder;
  }
  executeQuery(queryArguments) {
    this.apolloClient.watchQuery(this.graphQLBuilder().buildQuery(queryArguments)).subscribe({next: ({data}) => {
      this.queryResults = this._graphQLBuilder.extractResults(data);
    }});
  }

}
