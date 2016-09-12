import { Component, Input } from '@angular/core';
import SchemaService from './schema_service';

@Component({
  selector: 'gql-query-links',
  templateUrl: 'gql-query-links.html'
})
export default class QueryLinks {

  constructor(private schemaService: SchemaService) {}

  @Input() queryType: any;

  @Input() parentFieldPath: Array<String>;

  isQuery(queryField) {
    return (queryField.type.kind === 'LIST' || queryField.args.length > 0)
  }

  subqueryType(queryField) {
    return this.schemaService.getType(queryField.type.name);
  }

  queryLink(queryField) {
    return ['/query', ...(this.parentFieldPath || []), queryField.name];
  }

  fieldPath(queryField) {
    return [...(this.parentFieldPath || []), queryField.name];
  }
}
