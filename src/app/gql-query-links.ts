import { Component, Input } from '@angular/core';
import SchemaService from './schema_service';

export const IGNORE_FIELDS = ["relay", "node", "nodes"];

@Component({
  selector: 'gql-query-links',
  templateUrl: 'gql-query-links.html'
})
export default class QueryLinks {

  constructor(private schemaService: SchemaService) {}

  @Input() queryType: any;

  @Input() queryLinks: Array<Object>;

  @Input() parentFieldPath: Array<String>;

  isQuery(queryField) {
    console.log(queryField);
    return (queryField.type.kind === 'LIST' || queryField.args.length > 0)
  }

  subqueryType(queryField) {
    return this.schemaService.getType(queryField.type.name);
  }

  hasSubQueries(queryField) {
    return IGNORE_FIELDS.indexOf(queryField.name) == -1 &&
      this.subqueryType(queryField) &&
      this.subqueryType(queryField).fields &&
      this.subqueryType(queryField).fields.length > 0
  }

  queryLink(queryField) {
    return ['/query', ...(this.parentFieldPath || []), queryField.name];
  }

  fieldPath(queryField) {
    return [...(this.parentFieldPath || []), queryField.name];
  }

  getQueryLinks() {
    return this.queryLinks || this.buildQueryLinks(['query'],
      this.schemaService.getQueryType().fields);
  }

  buildQueryLinks(paths, queryFields) {
    console.log(paths, queryFields);
    return queryFields.map((queryField) => {
      if(this.isQuery(queryField)) {
        return {
          name: queryField.name,
          linkSegments: paths.concat(queryField.name)
        };
      } else if (this.hasSubQueries(queryField)) {
        return {
          name: queryField.name,
          queryLinks: this.buildQueryLinks(paths.concat(queryField.name),
            this.subqueryType(queryField).fields)
        };
      }
    }).filter(link => link);
  }
}
