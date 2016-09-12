import SchemaService from './schema_service';
import schema from '../fixtures/example_schema';
import graphqlHubSchema from '../fixtures/graphql_hub_schema';

describe('SchemaService', () => {
  const schemaService = new SchemaService();

  beforeEach(() => {
    schemaService.schema = schema.data.__schema;
  });

  it('has a query type', () => {
    const queryType = schemaService.getQueryType();
    expect(queryType.fields.length).toEqual(3);
  });

  describe('getQuerySchema', () => {
    it('resolves types for list queries', () => {
      const querySchema = schemaService.getQuerySchema(['posts']);
      expect(querySchema.type.kind).toEqual('LIST');
      expect(querySchema.name).toEqual('posts');
      expect(querySchema.type.ofType.fields.length).toBeGreaterThan(1);
    });
    it('resolves types for object queries', () => {
      const querySchema = schemaService.getQuerySchema(['user']);
      expect(querySchema.type.kind).toEqual('OBJECT');
      expect(querySchema.name).toEqual('user');
      expect(querySchema.type.fields.length).toBeGreaterThan(1);
    });
    it('finds nested query schemas', () => {
      schemaService.schema = graphqlHubSchema.data.__schema;
      const querySchema = schemaService.getQuerySchema(['github', 'user']);
      expect(querySchema.type.kind).toEqual('OBJECT');
      expect(querySchema.name).toEqual('user');
      expect(querySchema.type.fields.length).toBeGreaterThan(1);
    });
  });

});
