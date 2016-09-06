import SchemaService from './schema_service';
import schema from '../fixtures/example_schema';

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
      const querySchema = schemaService.getQuerySchema('posts');
      expect(querySchema.type.ofType.fields.length).toEqual(5);
    });
    it('resolves types for object queries', () => {
      const querySchema = schemaService.getQuerySchema('user');
      expect(querySchema.type.fields.length).toEqual(4);
    });
  });

});
