import { Angular2Apollo } from 'angular2-apollo';
import { Injectable } from '@angular/core';
import introspectionQuery from './introspection_query';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import GraphQLBuilder from './graphql_builder';

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

  getField(type, fieldName) {
    const fields = type.kind === 'LIST' ? type.ofType.fields : type.fields;
    return fields.find(field => field.name === fieldName);
  }

  getQueryFieldType(queryField) {
    if (queryField.type.kind === 'LIST') {
      return this.getType(queryField.type.ofType.name);
    } else {
      return this.getType(queryField.type.name);
    }
  }

  resolveQueryReturnType(queryField) {
    if (queryField.type.kind === 'LIST') {
      queryField.type.ofType = this.getType(queryField.type.ofType.name);
    } else {
      queryField.type = this.getType(queryField.type.name);
    }
  }

  findQuerySchema(queryType: any, fieldPath: Array<String>) {
    if (fieldPath.length > 1) {
      const field = this.getField(queryType, fieldPath[0]);
      return this.findQuerySchema(this.getQueryFieldType(field), fieldPath.slice(1));
    } else {
      const querySchema = this.getField(queryType, fieldPath[0]);
      this.resolveQueryReturnType(querySchema);
      return querySchema;
    }
  }

  getQuerySchema(fieldPath: Array<String>) {
    console.log(fieldPath);
    return this.findQuerySchema(this.getQueryType(), fieldPath);
  }

  getGraphQLBuilder(fieldPath: Array<String>) {
    return new GraphQLBuilder(this, fieldPath);
  }
  // getMutationSchema(mutationName) {
  //   return this.getSchema().map((schema) => {
  //     return schema.mutationType.fields.find((field) => field.name === mutationName);
  //   });
  // }
}
