import { TestBed } from '@angular/core/testing';
import GqlQueryLinks from './gql-query-links';
import SchemaService from './schema_service';
import schema from '../fixtures/graphql_hub_schema';
import { routing } from './routes';
import { AppModule } from './app.module';
import Query from './query';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

describe('GqlQueryLinks', () => {
  beforeEach(() => {
    let graphqlSchemaService = new SchemaService();
    graphqlSchemaService.schema = schema.data.__schema;

    // TestBed.configureTestingModule(AppModule);
    TestBed.configureTestingModule({
      declarations: [GqlQueryLinks, Query],
      imports: [routing, CommonModule, FormsModule],
      providers: [ { provide: SchemaService, useValue: graphqlSchemaService } ]
    });
  });

  it('builds links', () => {
    let fixture = TestBed.createComponent(GqlQueryLinks);

  });
});
