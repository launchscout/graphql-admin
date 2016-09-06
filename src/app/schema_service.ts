import { Angular2Apollo } from 'angular2-apollo';
import { Injectable } from '@angular/core';
import introspectionQuery from './introspection_query';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

const schemaQuery = {
  query: introspectionQuery,
  forceFetch: true
};

@Injectable()
export default class SchemaService {
  apolloClient: Angular2Apollo;
  schema: any;

  constructor(apolloClient?: Angular2Apollo) {
    this.apolloClient = apolloClient;
  }

  loadSchema() {
    return this.apolloClient.watchQuery(schemaQuery).map(({ data: { __schema } }) => {
      this.schema = __schema;
      console.log(this.schema);
      return this.schema;
    });
  }

  getType(typeName) {
    return this.schema.types.find(field => field.name === typeName);
  }

  getQueryType() {
    return this.getType(this.schema.queryType.name);
  }

  getQuerySchema(queryName: String) {
    const querySchema = this.getQueryType().fields.find(field => field.name === queryName);
    if (querySchema.type.kind === 'LIST') {
      querySchema.type.ofType = this.getType(querySchema.type.ofType.name);
    } else {
      querySchema.type = this.getType(querySchema.type.name);
    }
    return querySchema;
  }
  // getMutationSchema(mutationName) {
  //   return this.getSchema().map((schema) => {
  //     return schema.mutationType.fields.find((field) => field.name === mutationName);
  //   });
  // }
}
