import { Angular2Apollo } from 'angular2-apollo';
import { Injectable } from '@angular/core';
import queryTypeQuery from './query_type_query';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

const schemaQuery = {
  query: queryTypeQuery,
  forceFetch: true
};

@Injectable()
export default class SchemaService {
  constructor(apolloClient: Angular2Apollo) {
    this.apolloClient = apolloClient;
  }

  getSchema() {
    return Observable.create((subscriber) => {
      this.apolloClient.watchQuery(schemaQuery).subscribe(subscriber);
    }).map(({ data: { __schema } }) => __schema );
  }

  getQuerySchema(queryName) {
    return this.getSchema().map((schema) => {
      return schema.queryType.fields.find((field) => field.name === queryName);
    });
  }

  getMutationSchema(mutationName) {
    return this.getSchema().map((schema) => {
      return schema.mutationType.fields.find((field) => field.name === mutationName);
    });
  }
}
