import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import SchemaService from './schema_service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.html'
})
export default class AppComponent {
  schemaLoaded: boolean;

  constructor(public schemaService: SchemaService) {
    this.schemaService = schemaService;
    this.schemaService.loadSchema().subscribe((schema) => {
      this.schemaLoaded = true;
    });
  }

  queries() {
    return this.schemaService.getQueryType().fields;
  }
}
