import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import SchemaService from './schema_service';
import template from './app.html';

@Component({
    selector: 'app-root',
    template
})
export default class AppComponent {
  constructor(schemaService: SchemaService) {
    this.schemaService = schemaService;
    this.schemaService.getSchema().subscribe((schema) => {
      this.schema = schema;
      this.queries = schema.queryType.fields;
      this.mutations = schema.mutationType.fields;
    });
  }
}
