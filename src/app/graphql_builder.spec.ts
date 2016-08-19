import GraphQLBuilder from './graphql_builder';

describe("GraphQLBuilder", () => {
  let graphQLBuilder: GraphQLBuilder;
  let listQuerySchema: Object = {
    name: 'bob',
    type: {
      kind: 'LIST',
      ofType: {
        fields: [
          {name: "stuff", type: { kind: "SCALAR"} },
          {name: "other stuff", type: { kind: "SCALAR"} }
        ]
      }
    }
  };
  let objectQuerySchema: Object = {
    args: [
      {
        "type": {
          "ofType": {
            "name": "ID",
            "kind": "SCALAR"
          },
          "name": null,
          "kind": "NON_NULL"
        },
        "name": "id"
      }
    ]
    name: 'bob',
    type: {
      kind: 'OBJECT',
      fields: [
        {name: "stuff", type: { kind: "SCALAR"} },
        {name: "other stuff", type: { kind: "SCALAR"} }
      ]
    }
  };
  let mutationSchema = {
    "type": {
      "ofType": null,
      "kind": "OBJECT",
      "fields": [
        {
          "type": {
            "name": "User",
            "kind": "OBJECT"
          },
          "name": "author"
        },
        {
          "type": {
            "name": "String",
            "kind": "SCALAR"
          },
          "name": "body"
        },
        {
          "type": {
            "name": "ID",
            "kind": "SCALAR"
          },
          "name": "id"
        },
        {
          "type": {
            "name": "Time",
            "kind": "SCALAR"
          },
          "name": "postedAt"
        },
        {
          "type": {
            "name": "String",
            "kind": "SCALAR"
          },
          "name": "title"
        }
      ]
    },
    "name": "createPost",
    "args": [
      {
        "type": {
          "ofType": {
            "name": "String",
            "kind": "SCALAR"
          },
          "name": null,
          "kind": "NON_NULL"
        },
        "name": "body"
      },
      {
        "type": {
          "ofType": null,
          "name": "Time",
          "kind": "SCALAR"
        },
        "name": "postedAt"
      },
      {
        "type": {
          "ofType": {
            "name": "String",
            "kind": "SCALAR"
          },
          "name": null,
          "kind": "NON_NULL"
        },
        "name": "title"
      }
    ]
  }

  beforeEach( () => {
    graphQLBuilder = new GraphQLBuilder(listQuerySchema);
  });

  it("gets query name", () => {
    expect(graphQLBuilder.queryName()).toEqual('bob');
  });

  it("gets query name", () => {
    expect(graphQLBuilder.queryName()).toEqual('bob');
  });

  it("isList", () => {
    expect(graphQLBuilder.isList()).toBeTruthy();
    expect(new GraphQLBuilder(objectQuerySchema).isList()).toBeFalsy();
  });

  it("returns query fields", () => {
    expect(graphQLBuilder.queryFields().length).toEqual(2);
    expect(new GraphQLBuilder(objectQuerySchema).queryFields().length).toEqual(2);
  });

  it("builds queries", () => {
    graphQLBuilder = new GraphQLBuilder(objectQuerySchema);
    const query = graphQLBuilder.buildQuery({id: 1});
    expect(query.variables.id).toEqual(1);
    expect(query.query).toBeDefined();
  });

  it("builds queries without arguments", () => {
    const query = graphQLBuilder.buildQuery();
    expect(query.query).toBeDefined();
  });

  it("builds mutation", () => {
    graphQLBuilder = new GraphQLBuilder(mutationSchema);
    const mutation = graphQLBuilder.buildMutation({title: 'Hi'});
    expect(mutation.variables.title).toEqual('Hi');
    expect(mutation.mutation).toBeDefined();
  });
});
