import {Component, Input, OnInit} from '@angular/core';
import SchemaService from './schema_service';
import { ActivatedRoute } from '@angular/router';
import GqlArgsFormComponent from './gql-args-form';
import template from './gql-mutation.html';
import { Angular2Apollo } from 'angular2-apollo';
import GraphQLBuilder from './graphql_builder';

@Component({
    template,
    directives: [GqlArgsFormComponent]
})
export default class GqlMutationComponent implements OnInit {
  @Input() mutationName: String;

  constructor(private schemaService : SchemaService, public route: ActivatedRoute, private apolloClient: Angular2Apollo) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.mutationName = params.mutationName;
      this.schemaService.getMutationSchema(this.mutationName).subscribe((mutationSchema) => {
        this.mutationSchema = mutationSchema;
      });
    })
  }

  graphQLBuilder() {
    if (!this._graphQLBuilder) {
      this._graphQLBuilder = new GraphQLBuilder(this.mutationSchema);
    }
    return this._graphQLBuilder;
  }

  executeMutation(argValues) {
    this.apolloClient.mutate(this.graphQLBuilder().buildMutation(argValues)).then(({data}) => {
      this.mutationResults = data[this.graphQLBuilder().queryName()];
    }});
  }
}
