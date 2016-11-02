import { TestBed } from '@angular/core/testing';
import SchemaService from './schema_service';
import schema from '../fixtures/graphql_hub_schema';
import { routing } from './routes';
import { AppModule } from './app.module';
import Query from './query';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import GqlQueryLinks, { IGNORE_FIELDS } from './gql-query-links';

describe('GqlQueryLinks', () => {
  let gqlQueryLinks: GqlQueryLinks;

  beforeEach(() => {
    let graphqlSchemaService = new SchemaService();
    graphqlSchemaService.schema = schema.data.__schema;

    gqlQueryLinks = new GqlQueryLinks(graphqlSchemaService);
    // // TestBed.configureTestingModule(AppModule);
    // TestBed.configureTestingModule({
    //   declarations: [GqlQueryLinks, Query],
    //   imports: [routing, CommonModule, FormsModule],
    //   providers: [ { provide: SchemaService, useValue: graphqlSchemaService } ]
    // });
  });

  it('builds links', () => {
    const queryLinks = gqlQueryLinks.getQueryLinks();
    expect(queryLinks.length).toEqual(7);
    expect(queryLinks[0].name).toEqual('hn');
  });

  it('builds nested links', () => {
    const queryLinks = gqlQueryLinks.getQueryLinks();
    const githubLinks = queryLinks[4];
    console.log(githubLinks.queryLinks.map(link => link.name));
    expect(githubLinks.queryLinks.length).toEqual(2);
    expect(githubLinks.queryLinks[0].name).toEqual('user');
    expect(githubLinks.queryLinks[0].linkSegments).toEqual(['query', 'github', 'user']);
  });
});
