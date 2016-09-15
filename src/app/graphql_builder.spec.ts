import GraphQLBuilder from './graphql_builder';
import SchemaService from './schema_service';
import swapiSchema from '../fixtures/swapi_schema';
import exampleSchema from '../fixtures/example_schema';
import graphqlHubSchema from '../fixtures/graphql_hub_schema';

describe("GraphQLBuilder", () => {

  let graphQLBuilder: GraphQLBuilder;
  let schemaService: SchemaService;

  beforeEach( () => {
    schemaService = new SchemaService();
    schemaService.schema = exampleSchema.data.__schema;
    graphQLBuilder = new GraphQLBuilder(schemaService, ['posts']);
  });

  it("gets query name", () => {
    expect(graphQLBuilder.queryName()).toEqual('posts');
  });

  it("isList", () => {
    expect(graphQLBuilder.isList()).toBeTruthy();
    expect(new GraphQLBuilder(schemaService, ['user']).isList()).toBeFalsy();
  });

  it("returns query fields", () => {
    expect(graphQLBuilder.queryFields().length).toEqual(5);
    expect(new GraphQLBuilder(schemaService, ['user']).queryFields().length).toEqual(4);
  });

  it("builds queries", () => {
    graphQLBuilder = new GraphQLBuilder(schemaService, ['user']);
    const query = graphQLBuilder.buildQuery({id: 1});
    expect(query.variables.id).toEqual(1);
    expect(query.query).toBeDefined();
  });

  it("builds nested queries", () => {
    schemaService.schema = graphqlHubSchema.data.__schema;
    graphQLBuilder = new GraphQLBuilder(schemaService, ['github', 'user']);
    const query = graphQLBuilder.buildQuery({id: 'foo'});
    expect(query.query).toBeDefined();
    expect(query.query.loc.source.body).toContain('github {');
    expect(query.query.loc.source.body).not.toContain('user {');
    expect(query.query.loc.source.body).toContain('user(');
  });

  it("builds queries without arguments", () => {
    graphQLBuilder = new GraphQLBuilder(schemaService, ['posts']);
    const query = graphQLBuilder.buildQuery();
    expect(query.query).toBeDefined();
  });

  it("extracts results", () => {
    schemaService.schema = graphqlHubSchema.data.__schema;
    graphQLBuilder = new GraphQLBuilder(schemaService, ['github', 'user']);
    const data = {
      github: {
        user: {
          name: 'baz'
        }
      }
    };
    expect(graphQLBuilder.extractResults(data).name).toEqual(data.github.user.name);
  });

  // it("builds mutation", () => {
  //   graphQLBuilder = new GraphQLBuilder(mutationSchema);
  //   const mutation = graphQLBuilder.buildMutation({title: 'Hi'});
  //   expect(mutation.variables.title).toEqual('Hi');
  //   expect(mutation.mutation).toBeDefined();
  // });

  describe('relay pagination', () => {
    beforeEach(() => {
      schemaService.schema = swapiSchema.data.__schema;
      graphQLBuilder = new GraphQLBuilder(schemaService, ['allFilms']);
    });

    it('sees connection types as list', () => {
      expect(graphQLBuilder.isList()).toBeTruthy();
    });

    it('builds query', () => {
      const query = graphQLBuilder.buildQuery();
      expect(query.query).toBeDefined();
      expect(query.query.loc.source.body).toContain('allFilms(');
      expect(query.query.loc.source.body).toContain('edges {');
      expect(query.query.loc.source.body).toContain('node {');
      expect(query.query.loc.source.body).toContain('title');
    });

    it('extracts results', () => {
      const data = {
        allFilms: {
          edges: [
            {
              node: {
                title: 'A new hope'
              }
            }
          ]
        }
      };
      expect(graphQLBuilder.extractResults(data)[0].title).toEqual(data.allFilms.edges[0].node.title);
    });

  });
});
