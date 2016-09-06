import {Component, Input, OnInit} from '@angular/core';
import SchemaService from './schema_service';
import { ActivatedRoute } from '@angular/router';
import GqlListComponent from './gql-list';
import GqlScalarComponent from './gql-scalar';
import template from './query.html';

@Component({
    selector: 'graphql-admin-query',
    template,
    directives: [GqlListComponent, GqlScalarComponent]
})
export default class QueryComponent implements OnInit {
  queryName: String;
  querySchema: any;
  listQuery: boolean;

  constructor(private schemaService : SchemaService, public route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.queryName = params['queryName'];
      this.querySchema = this.schemaService.getQuerySchema(this.queryName);
      this.listQuery = this.querySchema.type.kind === 'LIST';
    })
  }
}
