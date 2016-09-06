const schema = {
  "data": {
    "__schema": {
      "types": [
        {
          "possibleTypes": null,
          "name": "__Directive",
          "kind": "OBJECT",
          "interfaces": [],
          "inputFields": null,
          "fields": [
            {
              "type": {
                "ofType": {
                  "ofType": null,
                  "name": "__InputValue",
                  "kind": "OBJECT"
                },
                "name": null,
                "kind": "LIST"
              },
              "name": "args",
              "isDeprecated": false,
              "description": null,
              "deprecationReason": null,
              "args": []
            },
            {
              "type": {
                "ofType": null,
                "name": "String",
                "kind": "SCALAR"
              },
              "name": "description",
              "isDeprecated": false,
              "description": null,
              "deprecationReason": null,
              "args": []
            },
            {
              "type": {
                "ofType": null,
                "name": "String",
                "kind": "SCALAR"
              },
              "name": "name",
              "isDeprecated": false,
              "description": null,
              "deprecationReason": null,
              "args": []
            },
            {
              "type": {
                "ofType": null,
                "name": "Boolean",
                "kind": "SCALAR"
              },
              "name": "onField",
              "isDeprecated": false,
              "description": null,
              "deprecationReason": null,
              "args": []
            },
            {
              "type": {
                "ofType": null,
                "name": "Boolean",
                "kind": "SCALAR"
              },
              "name": "onFragment",
              "isDeprecated": false,
              "description": null,
              "deprecationReason": null,
              "args": []
            },
            {
              "type": {
                "ofType": null,
                "name": "Boolean",
                "kind": "SCALAR"
              },
              "name": "onOperation",
              "isDeprecated": false,
              "description": null,
              "deprecationReason": null,
              "args": []
            }
          ],
          "enumValues": null,
          "description": "Represents a directive"
        },
        {
          "possibleTypes": null,
          "name": "__EnumValue",
          "kind": "OBJECT",
          "interfaces": [],
          "inputFields": null,
          "fields": [
            {
              "type": {
                "ofType": null,
                "name": "String",
                "kind": "SCALAR"
              },
              "name": "deprecationReason",
              "isDeprecated": false,
              "description": null,
              "deprecationReason": null,
              "args": []
            },
            {
              "type": {
                "ofType": null,
                "name": "String",
                "kind": "SCALAR"
              },
              "name": "description",
              "isDeprecated": false,
              "description": null,
              "deprecationReason": null,
              "args": []
            },
            {
              "type": {
                "ofType": null,
                "name": "Boolean",
                "kind": "SCALAR"
              },
              "name": "isDeprecated",
              "isDeprecated": false,
              "description": null,
              "deprecationReason": null,
              "args": []
            },
            {
              "type": {
                "ofType": null,
                "name": "String",
                "kind": "SCALAR"
              },
              "name": "name",
              "isDeprecated": false,
              "description": null,
              "deprecationReason": null,
              "args": []
            }
          ],
          "enumValues": null,
          "description": null
        },
        {
          "possibleTypes": null,
          "name": "__Field",
          "kind": "OBJECT",
          "interfaces": [],
          "inputFields": null,
          "fields": [
            {
              "type": {
                "ofType": {
                  "ofType": null,
                  "name": "__InputValue",
                  "kind": "OBJECT"
                },
                "name": null,
                "kind": "LIST"
              },
              "name": "args",
              "isDeprecated": false,
              "description": null,
              "deprecationReason": null,
              "args": []
            },
            {
              "type": {
                "ofType": null,
                "name": "String",
                "kind": "SCALAR"
              },
              "name": "deprecationReason",
              "isDeprecated": false,
              "description": null,
              "deprecationReason": null,
              "args": []
            },
            {
              "type": {
                "ofType": null,
                "name": "String",
                "kind": "SCALAR"
              },
              "name": "description",
              "isDeprecated": false,
              "description": null,
              "deprecationReason": null,
              "args": []
            },
            {
              "type": {
                "ofType": null,
                "name": "Boolean",
                "kind": "SCALAR"
              },
              "name": "isDeprecated",
              "isDeprecated": false,
              "description": null,
              "deprecationReason": null,
              "args": []
            },
            {
              "type": {
                "ofType": null,
                "name": "String",
                "kind": "SCALAR"
              },
              "name": "name",
              "isDeprecated": false,
              "description": null,
              "deprecationReason": null,
              "args": []
            },
            {
              "type": {
                "ofType": null,
                "name": "__Type",
                "kind": "OBJECT"
              },
              "name": "type",
              "isDeprecated": false,
              "description": null,
              "deprecationReason": null,
              "args": []
            }
          ],
          "enumValues": null,
          "description": null
        },
        {
          "possibleTypes": null,
          "name": "__InputValue",
          "kind": "OBJECT",
          "interfaces": [],
          "inputFields": null,
          "fields": [
            {
              "type": {
                "ofType": null,
                "name": "String",
                "kind": "SCALAR"
              },
              "name": "defaultValue",
              "isDeprecated": false,
              "description": null,
              "deprecationReason": null,
              "args": []
            },
            {
              "type": {
                "ofType": null,
                "name": "String",
                "kind": "SCALAR"
              },
              "name": "description",
              "isDeprecated": false,
              "description": null,
              "deprecationReason": null,
              "args": []
            },
            {
              "type": {
                "ofType": null,
                "name": "String",
                "kind": "SCALAR"
              },
              "name": "name",
              "isDeprecated": false,
              "description": null,
              "deprecationReason": null,
              "args": []
            },
            {
              "type": {
                "ofType": null,
                "name": "__Type",
                "kind": "OBJECT"
              },
              "name": "type",
              "isDeprecated": false,
              "description": null,
              "deprecationReason": null,
              "args": []
            }
          ],
          "enumValues": null,
          "description": null
        },
        {
          "possibleTypes": null,
          "name": "__Schema",
          "kind": "OBJECT",
          "interfaces": [],
          "inputFields": null,
          "fields": [
            {
              "type": {
                "ofType": {
                  "ofType": null,
                  "name": "__Directive",
                  "kind": "OBJECT"
                },
                "name": null,
                "kind": "LIST"
              },
              "name": "directives",
              "isDeprecated": false,
              "description": null,
              "deprecationReason": null,
              "args": []
            },
            {
              "type": {
                "ofType": null,
                "name": "__Type",
                "kind": "OBJECT"
              },
              "name": "mutationType",
              "isDeprecated": false,
              "description": null,
              "deprecationReason": null,
              "args": []
            },
            {
              "type": {
                "ofType": null,
                "name": "__Type",
                "kind": "OBJECT"
              },
              "name": "queryType",
              "isDeprecated": false,
              "description": null,
              "deprecationReason": null,
              "args": []
            },
            {
              "type": {
                "ofType": {
                  "ofType": null,
                  "name": "__Type",
                  "kind": "OBJECT"
                },
                "name": null,
                "kind": "LIST"
              },
              "name": "types",
              "isDeprecated": false,
              "description": null,
              "deprecationReason": null,
              "args": []
            }
          ],
          "enumValues": null,
          "description": "Represents a schema"
        },
        {
          "possibleTypes": null,
          "name": "__Type",
          "kind": "OBJECT",
          "interfaces": [],
          "inputFields": null,
          "fields": [
            {
              "type": {
                "ofType": null,
                "name": "String",
                "kind": "SCALAR"
              },
              "name": "description",
              "isDeprecated": false,
              "description": null,
              "deprecationReason": null,
              "args": []
            },
            {
              "type": {
                "ofType": {
                  "ofType": null,
                  "name": "__EnumValue",
                  "kind": "OBJECT"
                },
                "name": null,
                "kind": "LIST"
              },
              "name": "enumValues",
              "isDeprecated": false,
              "description": null,
              "deprecationReason": null,
              "args": [
                {
                  "type": {
                    "ofType": null,
                    "name": "Boolean",
                    "kind": "SCALAR"
                  },
                  "name": "includeDeprecated",
                  "description": null,
                  "defaultValue": "false"
                }
              ]
            },
            {
              "type": {
                "ofType": {
                  "ofType": null,
                  "name": "__Field",
                  "kind": "OBJECT"
                },
                "name": null,
                "kind": "LIST"
              },
              "name": "fields",
              "isDeprecated": false,
              "description": null,
              "deprecationReason": null,
              "args": [
                {
                  "type": {
                    "ofType": null,
                    "name": "Boolean",
                    "kind": "SCALAR"
                  },
                  "name": "includeDeprecated",
                  "description": null,
                  "defaultValue": "false"
                }
              ]
            },
            {
              "type": {
                "ofType": {
                  "ofType": null,
                  "name": "__InputValue",
                  "kind": "OBJECT"
                },
                "name": null,
                "kind": "LIST"
              },
              "name": "inputFields",
              "isDeprecated": false,
              "description": null,
              "deprecationReason": null,
              "args": []
            },
            {
              "type": {
                "ofType": {
                  "ofType": null,
                  "name": "__Type",
                  "kind": "OBJECT"
                },
                "name": null,
                "kind": "LIST"
              },
              "name": "interfaces",
              "isDeprecated": false,
              "description": null,
              "deprecationReason": null,
              "args": []
            },
            {
              "type": {
                "ofType": null,
                "name": "String",
                "kind": "SCALAR"
              },
              "name": "kind",
              "isDeprecated": false,
              "description": null,
              "deprecationReason": null,
              "args": []
            },
            {
              "type": {
                "ofType": null,
                "name": "String",
                "kind": "SCALAR"
              },
              "name": "name",
              "isDeprecated": false,
              "description": null,
              "deprecationReason": null,
              "args": []
            },
            {
              "type": {
                "ofType": null,
                "name": "__Type",
                "kind": "OBJECT"
              },
              "name": "ofType",
              "isDeprecated": false,
              "description": null,
              "deprecationReason": null,
              "args": []
            },
            {
              "type": {
                "ofType": {
                  "ofType": null,
                  "name": "__Type",
                  "kind": "OBJECT"
                },
                "name": null,
                "kind": "LIST"
              },
              "name": "possibleTypes",
              "isDeprecated": false,
              "description": null,
              "deprecationReason": null,
              "args": []
            }
          ],
          "enumValues": null,
          "description": "Represents scalars, interfaces, object types, unions, enums in the system"
        },
        {
          "possibleTypes": null,
          "name": "Boolean",
          "kind": "SCALAR",
          "interfaces": null,
          "inputFields": null,
          "fields": null,
          "enumValues": null,
          "description": "The `Boolean` scalar type represents `true` or `false`."
        },
        {
          "possibleTypes": null,
          "name": "Contact",
          "kind": "OBJECT",
          "interfaces": [],
          "inputFields": null,
          "fields": [
            {
              "type": {
                "ofType": null,
                "name": "String",
                "kind": "SCALAR"
              },
              "name": "type",
              "isDeprecated": false,
              "description": null,
              "deprecationReason": null,
              "args": []
            },
            {
              "type": {
                "ofType": null,
                "name": "String",
                "kind": "SCALAR"
              },
              "name": "value",
              "isDeprecated": false,
              "description": null,
              "deprecationReason": null,
              "args": []
            }
          ],
          "enumValues": null,
          "description": null
        },
        {
          "possibleTypes": null,
          "name": "ContactInput",
          "kind": "INPUT_OBJECT",
          "interfaces": null,
          "inputFields": [
            {
              "type": {
                "ofType": {
                  "ofType": null,
                  "name": "String",
                  "kind": "SCALAR"
                },
                "name": null,
                "kind": "NON_NULL"
              },
              "name": "type",
              "description": null,
              "defaultValue": null
            },
            {
              "type": {
                "ofType": {
                  "ofType": null,
                  "name": "String",
                  "kind": "SCALAR"
                },
                "name": null,
                "kind": "NON_NULL"
              },
              "name": "value",
              "description": null,
              "defaultValue": null
            }
          ],
          "fields": null,
          "enumValues": null,
          "description": null
        },
        {
          "possibleTypes": null,
          "name": "Float",
          "kind": "SCALAR",
          "interfaces": null,
          "inputFields": null,
          "fields": null,
          "enumValues": null,
          "description": "The `Float` scalar type represents signed double-precision fractional\nvalues as specified by\n[IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point)."
        },
        {
          "possibleTypes": null,
          "name": "ID",
          "kind": "SCALAR",
          "interfaces": null,
          "inputFields": null,
          "fields": null,
          "enumValues": null,
          "description": "The `ID` scalar type represents a unique identifier, often used to\nrefetch an object or as key for a cache. The ID type appears in a JSON\nresponse as a String; however, it is not intended to be human-readable.\nWhen expected as an input type, any string (such as `\"4\"`) or integer\n(such as `4`) input value will be accepted as an ID."
        },
        {
          "possibleTypes": null,
          "name": "Int",
          "kind": "SCALAR",
          "interfaces": null,
          "inputFields": null,
          "fields": null,
          "enumValues": null,
          "description": "The `Int` scalar type represents non-fractional signed whole numeric\nvalues. Int can represent values between `-(2^53 - 1)` and `2^53 - 1` since\nrepresented in JSON as double-precision floating point numbers specified\nby [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point)."
        },
        {
          "possibleTypes": null,
          "name": "RootMutationType",
          "kind": "OBJECT",
          "interfaces": [],
          "inputFields": null,
          "fields": [
            {
              "type": {
                "ofType": null,
                "name": "Post",
                "kind": "OBJECT"
              },
              "name": "createPost",
              "isDeprecated": false,
              "description": null,
              "deprecationReason": null,
              "args": [
                {
                  "type": {
                    "ofType": {
                      "ofType": null,
                      "name": "String",
                      "kind": "SCALAR"
                    },
                    "name": null,
                    "kind": "NON_NULL"
                  },
                  "name": "body",
                  "description": null,
                  "defaultValue": null
                },
                {
                  "type": {
                    "ofType": {
                      "ofType": null,
                      "name": "String",
                      "kind": "SCALAR"
                    },
                    "name": null,
                    "kind": "NON_NULL"
                  },
                  "name": "title",
                  "description": null,
                  "defaultValue": null
                }
              ]
            },
            {
              "type": {
                "ofType": null,
                "name": "User",
                "kind": "OBJECT"
              },
              "name": "createUser",
              "isDeprecated": false,
              "description": null,
              "deprecationReason": null,
              "args": [
                {
                  "type": {
                    "ofType": {
                      "ofType": null,
                      "name": "String",
                      "kind": "SCALAR"
                    },
                    "name": null,
                    "kind": "NON_NULL"
                  },
                  "name": "name",
                  "description": null,
                  "defaultValue": null
                }
              ]
            }
          ],
          "enumValues": null,
          "description": null
        },
        {
          "possibleTypes": null,
          "name": "Post",
          "kind": "OBJECT",
          "interfaces": [],
          "inputFields": null,
          "fields": [
            {
              "type": {
                "ofType": null,
                "name": "User",
                "kind": "OBJECT"
              },
              "name": "author",
              "isDeprecated": false,
              "description": null,
              "deprecationReason": null,
              "args": []
            },
            {
              "type": {
                "ofType": null,
                "name": "String",
                "kind": "SCALAR"
              },
              "name": "body",
              "isDeprecated": false,
              "description": null,
              "deprecationReason": null,
              "args": []
            },
            {
              "type": {
                "ofType": null,
                "name": "ID",
                "kind": "SCALAR"
              },
              "name": "id",
              "isDeprecated": false,
              "description": null,
              "deprecationReason": null,
              "args": []
            },
            {
              "type": {
                "ofType": null,
                "name": "Time",
                "kind": "SCALAR"
              },
              "name": "postedAt",
              "isDeprecated": false,
              "description": null,
              "deprecationReason": null,
              "args": []
            },
            {
              "type": {
                "ofType": null,
                "name": "String",
                "kind": "SCALAR"
              },
              "name": "title",
              "isDeprecated": false,
              "description": null,
              "deprecationReason": null,
              "args": []
            }
          ],
          "enumValues": null,
          "description": null
        },
        {
          "possibleTypes": null,
          "name": "RootQueryType",
          "kind": "OBJECT",
          "interfaces": [],
          "inputFields": null,
          "fields": [
            {
              "type": {
                "ofType": {
                  "ofType": null,
                  "name": "Post",
                  "kind": "OBJECT"
                },
                "name": null,
                "kind": "LIST"
              },
              "name": "posts",
              "isDeprecated": false,
              "description": null,
              "deprecationReason": null,
              "args": []
            },
            {
              "type": {
                "ofType": null,
                "name": "User",
                "kind": "OBJECT"
              },
              "name": "user",
              "isDeprecated": false,
              "description": null,
              "deprecationReason": null,
              "args": [
                {
                  "type": {
                    "ofType": {
                      "ofType": null,
                      "name": "ID",
                      "kind": "SCALAR"
                    },
                    "name": null,
                    "kind": "NON_NULL"
                  },
                  "name": "id",
                  "description": null,
                  "defaultValue": null
                }
              ]
            },
            {
              "type": {
                "ofType": {
                  "ofType": null,
                  "name": "User",
                  "kind": "OBJECT"
                },
                "name": null,
                "kind": "LIST"
              },
              "name": "users",
              "isDeprecated": false,
              "description": null,
              "deprecationReason": null,
              "args": []
            }
          ],
          "enumValues": null,
          "description": null
        },
        {
          "possibleTypes": null,
          "name": "String",
          "kind": "SCALAR",
          "interfaces": null,
          "inputFields": null,
          "fields": null,
          "enumValues": null,
          "description": "The `String` scalar type represents textual data, represented as UTF-8\ncharacter sequences. The String type is most often used by GraphQL to\nrepresent free-form human-readable text."
        },
        {
          "possibleTypes": null,
          "name": "Time",
          "kind": "SCALAR",
          "interfaces": null,
          "inputFields": null,
          "fields": null,
          "enumValues": null,
          "description": null
        },
        {
          "possibleTypes": null,
          "name": "User",
          "kind": "OBJECT",
          "interfaces": [],
          "inputFields": null,
          "fields": [
            {
              "type": {
                "ofType": null,
                "name": "Contact",
                "kind": "OBJECT"
              },
              "name": "contact",
              "isDeprecated": false,
              "description": null,
              "deprecationReason": null,
              "args": []
            },
            {
              "type": {
                "ofType": null,
                "name": "ID",
                "kind": "SCALAR"
              },
              "name": "id",
              "isDeprecated": false,
              "description": null,
              "deprecationReason": null,
              "args": []
            },
            {
              "type": {
                "ofType": null,
                "name": "String",
                "kind": "SCALAR"
              },
              "name": "name",
              "isDeprecated": false,
              "description": null,
              "deprecationReason": null,
              "args": []
            },
            {
              "type": {
                "ofType": {
                  "ofType": null,
                  "name": "Post",
                  "kind": "OBJECT"
                },
                "name": null,
                "kind": "LIST"
              },
              "name": "posts",
              "isDeprecated": false,
              "description": null,
              "deprecationReason": null,
              "args": []
            }
          ],
          "enumValues": null,
          "description": "A user of the blog\n"
        }
      ],
      "queryType": {
        "name": "RootQueryType"
      },
      "mutationType": {
        "name": "RootMutationType"
      }
    }
  }
};

export default schema;
