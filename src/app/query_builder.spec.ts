import QueryBuilder from './query_builder';

describe("QueryBuilder", () => {
  let queryBuilder: QueryBuilder;
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

  beforeEach( () => {
    queryBuilder = new QueryBuilder(listQuerySchema);
  });

  it("gets query name", () => {
    expect(queryBuilder.queryName()).toEqual('bob');
  });

  it("gets query name", () => {
    expect(queryBuilder.queryName()).toEqual('bob');
  });

  it("isList", () => {
    expect(queryBuilder.isList()).toBeTruthy();
    expect(new QueryBuilder(objectQuerySchema).isList()).toBeFalsy();
  });

  it("returns query fields", () => {
    expect(queryBuilder.queryFields().length).toEqual(2);
    expect(new QueryBuilder(objectQuerySchema).queryFields().length).toEqual(2);
  });

  it("builds queries", () => {
    queryBuilder = new QueryBuilder(objectQuerySchema);
    const query = queryBuilder.buildQuery({id: 1});
    expect(query.variables.id).toEqual(1);
    expect(query.query).toBeDefined();
  });
  it("builds queries without arguments", () => {
    const query = queryBuilder.buildQuery();
    expect(query.query).toBeDefined();
  });
});
