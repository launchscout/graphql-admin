import {Component, Input, OnInit} from '@angular/core';
import SchemaService from './schema_service';
import { ActivatedRoute } from '@angular/router';
import GqlListComponent from './gql-list';
import GqlScalarComponent from './gql-scalar';
import template from './gql-mutation.html';

@Component({
    template,
    directives: [GqlListComponent, GqlScalarComponent]
})
export default class GqlMutationComponent implements OnInit {
  @Input() mutationName: String;

  constructor(private schemaService : SchemaService, public route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.mutationName = params.mutationName;
      this.schemaService.getMutationSchema(this.mutationName).subscribe((mutationSchema) => {
        this.mutationSchema = mutationSchema;
      });
    })
  }
}
