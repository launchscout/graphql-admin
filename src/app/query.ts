import {Component, Input, OnInit} from '@angular/core';
import SchemaService from './schema_service';
import { ActivatedRoute } from '@angular/router';
import GqlListComponent from './gql-list';
import GqlScalarComponent from './gql-scalar';

@Component({
    selector: 'graphql-admin-query',
    templateUrl: 'query.html',
    directives: [GqlListComponent, GqlScalarComponent]
})
export default class QueryComponent implements OnInit {
  queryName: String;
  queryTypeName: String;
  fieldPath: Array<String>;
  querySchema: any;
  listQuery: boolean;

  constructor(private schemaService : SchemaService, public route: ActivatedRoute) {
  }

  ngOnInit() {
    // this.route.params.subscribe((params) => {
    //   console.log(params);
    //   this.queryName = params['queryName'];
    //   this.queryTypeName = params['queryTypeName'];
    //   this.querySchema = this.schemaService.getQuerySchema(this.queryTypeName, this.queryName);
    //   this.listQuery = this.querySchema.type.kind === 'LIST';
    // })
    this.route.url.map((urlSegments) => urlSegments.map(segment => segment.path)).subscribe((paths) => {
      this.fieldPath = paths;
      this.querySchema = this.schemaService.getQuerySchema(paths);
      this.listQuery = this.querySchema.type.kind === 'LIST';
    });
  }
}
