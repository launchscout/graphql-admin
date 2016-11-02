const schema = {
  "data": {
    "__schema": {
      "queryType": {
        "name": "Query"
      },
      "mutationType": {
        "name": "Mutation"
      },
      "types": [
        {
          "kind": "OBJECT",
          "name": "Query",
          "description": "The query root of GitHub's GraphQL interface.",
          "fields": [
            {
              "name": "node",
              "description": null,
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "INTERFACE",
                "name": "Node",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "nodes",
              "description": "Lookup nodes by a list of IDs.",
              "args": [
                {
                  "name": "ids",
                  "description": "The list of node IDs.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "LIST",
                      "name": "List",
                      "ofType": {
                        "kind": "NON_NULL",
                        "name": "Non-Null",
                        "ofType": {
                          "kind": "SCALAR",
                          "name": "ID"
                        }
                      }
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Node",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "relay",
              "description": "Hack to workaround https://github.com/facebook/relay/issues/112 re-exposing the root query object",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Query",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "repositoryOwner",
              "description": "Lookup a repository owner (ie. either a User or an Organization) by login.",
              "args": [
                {
                  "name": "login",
                  "description": "The username to lookup the owner by.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "INTERFACE",
                "name": "RepositoryOwner",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "search",
              "description": "Perform a search across resources.",
              "args": [
                {
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "query",
                  "description": "The search string to look for.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "type",
                  "description": "The types of search items to search within.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "SearchType",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "SearchResultItemConnection",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "viewer",
              "description": "The currently authenticated user.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "SCALAR",
          "name": "ID",
          "description": "Represents a unique identifier that is Base64 obfuscated. It is often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `\"VXNlci0xMA==\"`) or integer (such as `4`) input value will be accepted as an ID.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INTERFACE",
          "name": "Node",
          "description": null,
          "fields": [
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": [
            {
              "kind": "OBJECT",
              "name": "AssignedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "BaseRefForcePushedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "Blob",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "ClosedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "Commit",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "CommitComment",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "DemilestonedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "DeployedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "Deployment",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "DeploymentStatus",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "HeadRefDeletedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "HeadRefForcePushedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "HeadRefRestoredEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "Issue",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "IssueComment",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "Label",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "LabeledEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "LockedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "MentionedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "MergedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "Milestone",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "MilestonedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "Organization",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "Project",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "ProjectCard",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "ProjectColumn",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "PullRequest",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "PullRequestReview",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "PullRequestReviewComment",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "PullRequestReviewThread",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "Reaction",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "ReactionGroup",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "Ref",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "ReferencedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "RenamedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "ReopenedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "Repository",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "RepositoryInvitation",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "Status",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "StatusContext",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "SubscribedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "Tag",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "Tree",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "UnassignedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "UnlabeledEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "UnlockedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "UnsubscribedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "User",
          "description": "A user is an individual's account on GitHub that owns repositories and can make new content.",
          "fields": [
            {
              "name": "avatarURL",
              "description": "A URL pointing to the user's public avatar.",
              "args": [
                {
                  "name": "size",
                  "description": "The size of the resulting square image.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "bio",
              "description": "The user's public profile bio.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "company",
              "description": "The user's public profile company.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "contributedRepositories",
              "description": "A list of repositories that the user recently contributed to.",
              "args": [
                {
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "RepositoryConnection",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createdAt",
              "description": "When this user signed up.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "databaseId",
              "description": "Identifies the primary key from the database.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": true,
              "deprecationReason": "Exposed database IDs will eventually be removed in favor of global Relay IDs."
            },
            {
              "name": "email",
              "description": "The user's public profile email.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "followers",
              "description": "A list of users the given user is followed by.",
              "args": [
                {
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "UserConnection",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "following",
              "description": "A list of users the given user is following.",
              "args": [
                {
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "UserConnection",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "isBountyHunter",
              "description": "Whether or not this user is a participant in the GitHub Security Bug Bounty.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "isDeveloperProgramMember",
              "description": "Whether or not this user is a GitHub Developer Program member.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "isEmployee",
              "description": "Whether or not this user is a GitHub employee.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "isSiteAdmin",
              "description": "Whether or not this user is a site administrator.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "isViewer",
              "description": "Whether or not this user is the viewing user.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "location",
              "description": "The user's public profile location.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "login",
              "description": "The username used to login.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "name",
              "description": "The user's public profile name.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "organizations",
              "description": "A list of organizations the user belongs to.",
              "args": [
                {
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "OrganizationConnection",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "pullRequests",
              "description": "A list of pull requests assocated with this user.",
              "args": [
                {
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PullRequestConnection",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "repositories",
              "description": "A list of repositories that the user owns.",
              "args": [
                {
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "privacy",
                  "description": "If non-null, filters repositories according to privacy",
                  "type": {
                    "kind": "ENUM",
                    "name": "RepositoryPrivacy",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "isFork",
                  "description": "If non-null, filters repositories according to whether they are forks of another repository",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "orderBy",
                  "description": "Ordering options for repositories returned from the connection",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "RepositoryOrder",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "RepositoryConnection",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "repository",
              "description": "Find Repository.",
              "args": [
                {
                  "name": "name",
                  "description": "Name of Repository to find.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "Repository",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "starredRepositories",
              "description": "Repositories the user has starred.",
              "args": [
                {
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "ownedByViewer",
                  "description": "Filters starred repositories to only return repositories owned by the viewer.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "orderBy",
                  "description": "Order for connection",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "StarOrder",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "StarredRepositoryConnection",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "viewerCanFollow",
              "description": "Whether or not the viewer is able to follow the user.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "viewerIsFollowing",
              "description": "Whether or not this user is followed by the viewer.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "watching",
              "description": "A list of repositories the given user is watching.",
              "args": [
                {
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "RepositoryConnection",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "websiteURL",
              "description": "A URL pointing to the user's public website/blog.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "kind": "INTERFACE",
              "name": "RepositoryOwner",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "SCALAR",
          "name": "Int",
          "description": "Represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "SCALAR",
          "name": "DateTime",
          "description": "An ISO-8601 encoded UTC date string.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "SCALAR",
          "name": "String",
          "description": "Represents textual data as UTF-8 character sequences. This type is most often used by GraphQL to represent free-form human-readable text.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "SCALAR",
          "name": "Boolean",
          "description": "Represents `true` or `false` values.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "RepositoryConnection",
          "description": "A list of repositories that are connected to the parent.",
          "fields": [
            {
              "name": "edges",
              "description": null,
              "args": [],
              "type": {
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "RepositoryEdge",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "pageInfo",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "totalCount",
              "description": "Identifies the total count of items in the connection.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "RepositoryEdge",
          "description": null,
          "fields": [
            {
              "name": "cursor",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "node",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Repository",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "Repository",
          "description": "A repository contains the content for a project.",
          "fields": [
            {
              "name": "commitComments",
              "description": "A list of commit comments associated with the repository.",
              "args": [
                {
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "CommitCommentConnection",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "description",
              "description": "The description of the repository.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "descriptionHTML",
              "description": "The description of the repository rendered to HTML.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "HTML",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "forks",
              "description": "A list of child repositories.",
              "args": [
                {
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "orderBy",
                  "description": "Ordering options for repositories returned from the connection",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "RepositoryOrder",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "RepositoryConnection",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "hasIssuesEnabled",
              "description": "Indicates if the repository has issues feature enabled.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "hasWikiEnabled",
              "description": "Indicates if the repository has wiki feature enabled.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "homepageURL",
              "description": "The repository's URL.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "isFork",
              "description": "Identifies if the repository is a fork.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "isLocked",
              "description": "Indicates if the repository has been locked or not.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "isMirror",
              "description": "Identifies if the repository is a mirror.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "isPrivate",
              "description": "Identifies if the repository is private.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "issues",
              "description": "A list of issues that have been opened in the repository.",
              "args": [
                {
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "states",
                  "description": "A list of states to filter the issues by.",
                  "type": {
                    "kind": "LIST",
                    "name": "List",
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": "Non-Null",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "IssueState",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "IssueConnection",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "labels",
              "description": "A list of labels associated with the repository.",
              "args": [
                {
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "LabelConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "lockReason",
              "description": "The reason the repository has been locked.",
              "args": [],
              "type": {
                "kind": "ENUM",
                "name": "RepositoryLockReason",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "mentionableUsers",
              "description": "A list of Users that can be mentioned in the context of the repository.",
              "args": [
                {
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "UserConnection",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "milestones",
              "description": "A list of milestones associated with the repository.",
              "args": [
                {
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "MilestoneConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "mirrorURL",
              "description": "The repository's original mirror URL.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "name",
              "description": "The name of the repository.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "object",
              "description": "A Git object in the repository",
              "args": [
                {
                  "name": "oid",
                  "description": "The Git object ID",
                  "type": {
                    "kind": "SCALAR",
                    "name": "GitObjectID",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "expression",
                  "description": "A Git revision expression suitable for rev-parse",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "INTERFACE",
                "name": "GitObject",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "owner",
              "description": "The User owner of the repository.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "RepositoryOwner",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "parent",
              "description": "The repository parent, if this is a fork.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Repository",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "project",
              "description": "Find project by number.",
              "args": [
                {
                  "name": "number",
                  "description": "The project number to find.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "Project",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "projects",
              "description": "A list of projects under the owner.",
              "args": [
                {
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "ProjectConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "pullRequests",
              "description": "A list of pull requests that have been opened in the repository.",
              "args": [
                {
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "states",
                  "description": "A list of states to filter the pull requests by.",
                  "type": {
                    "kind": "LIST",
                    "name": "List",
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": "Non-Null",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "PullRequestState",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PullRequestConnection",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ref",
              "description": "Fetch a given branch from the repository",
              "args": [
                {
                  "name": "qualifiedName",
                  "description": "The branch name with the refs/heads/ prefix",
                  "type": {
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "Ref",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "stargazers",
              "description": "A list of users who have starred this repository.",
              "args": [
                {
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "orderBy",
                  "description": "Order for connection",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "StarOrder",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "StargazerConnection",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "viewerCanCreateProjects",
              "description": "Can the current viewer create new projects on this owner.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "viewerCanSubscribe",
              "description": "Check if the viewer is ability to change their subscription status.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "viewerHasStarred",
              "description": "Returns a boolean indicating whether the viewing user has starred this repository.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "viewerSubscription",
              "description": "Identifies if the viewer is watching, not watching or ignoring.",
              "args": [],
              "type": {
                "kind": "ENUM",
                "name": "SubscriptionState",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "watchers",
              "description": "A list of users watching the repository.",
              "args": [
                {
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "UserConnection",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "kind": "INTERFACE",
              "name": "ProjectOwner",
              "ofType": null
            },
            {
              "kind": "INTERFACE",
              "name": "RepositoryInfo",
              "ofType": null
            },
            {
              "kind": "INTERFACE",
              "name": "Subscribable",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "RepositoryOrder",
          "description": "Ordering options for repository connections",
          "fields": null,
          "inputFields": [
            {
              "name": "field",
              "description": "The field to order repositories by.",
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "RepositoryOrderField",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "direction",
              "description": "The ordering direction.",
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "OrderDirection",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "CommitCommentConnection",
          "description": null,
          "fields": [
            {
              "name": "edges",
              "description": null,
              "args": [],
              "type": {
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "CommitCommentEdge",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "pageInfo",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "totalCount",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "CommitCommentEdge",
          "description": null,
          "fields": [
            {
              "name": "cursor",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "node",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "CommitComment",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "CommitComment",
          "description": "Represents a comment on a given Commit.",
          "fields": [
            {
              "name": "body",
              "description": "Identifies the comment body.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "commit",
              "description": "Identifies the commit associated with the comment.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Commit",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "databaseId",
              "description": "Identifies the primary key from the database.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": true,
              "deprecationReason": "Exposed database IDs will eventually be removed in favor of global Relay IDs."
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "liveReactionUpdatesEnabled",
              "description": "Are reaction live updates enabled for this subject.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "path",
              "description": "Identifies the file path associated with the comment.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "position",
              "description": "Identifies the line position associated with the comment.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "reactionGroups",
              "description": "A list of Reactions grouped by content left on the subject.",
              "args": [],
              "type": {
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "NON_NULL",
                  "name": "Non-Null",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ReactionGroup",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "reactions",
              "description": "A list of Reactions left on the Issue.",
              "args": [
                {
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "content",
                  "description": "Allows filtering Reactions by emoji.",
                  "type": {
                    "kind": "ENUM",
                    "name": "ReactionContent",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "orderBy",
                  "description": "Allows specifying the order in which reactions are returned.",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "ReactionOrder",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ReactionConnection",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "reactionsWebsocket",
              "description": "The websocket channel ID for reaction live updates.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "repository",
              "description": "Identifies the repository associated with the comment.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "user",
              "description": "Identifies the user who created the comment.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "viewerCanReact",
              "description": "Can user react to this subject",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "kind": "INTERFACE",
              "name": "Reactable",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "Commit",
          "description": "Represents a Git commit.",
          "fields": [
            {
              "name": "author",
              "description": "Authorship details of the commit.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "GitActor",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "comments",
              "description": "Comments made on the commit.",
              "args": [
                {
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "CommitCommentConnection",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "committer",
              "description": "Committership details of the commit.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "GitActor",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "history",
              "description": "The linear commit history starting from (and including) this commit, in the same order as `git log`.",
              "args": [
                {
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "path",
                  "description": "If non-null, filters history to only show commits touching files under this path.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "author",
                  "description": "If non-null, filters history to only show commits with matching authorship.",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "Author",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "since",
                  "description": "Allows specifying a beginning time or date for fetching commits.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "GitTimestamp",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "until",
                  "description": "Allows specifying an ending time or date for fetching commits.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "GitTimestamp",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "CommitHistoryConnection",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "message",
              "description": "The Git commit message",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "messageBody",
              "description": "The Git commit message body",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "messageBodyHTML",
              "description": "The commit message body rendered to HTML.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "HTML",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "messageHeadline",
              "description": "The Git commit message headline",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "messageHeadlineHTML",
              "description": "The commit message headline rendered to HTML.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "HTML",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "oid",
              "description": "The Git object ID",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "GitObjectID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "repository",
              "description": "The Repository this commit belongs to",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "signature",
              "description": "Commit signing information, if present.",
              "args": [],
              "type": {
                "kind": "INTERFACE",
                "name": "GitSignature",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "status",
              "description": "Status information for this commit",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Status",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "tree",
              "description": "Commit's root Tree",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Tree",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "websocket",
              "description": "The websocket channel ID for live updates.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "kind": "INTERFACE",
              "name": "GitObject",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "Tree",
          "description": "Represents a Git tree.",
          "fields": [
            {
              "name": "entries",
              "description": "A list of tree entries.",
              "args": [],
              "type": {
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "NON_NULL",
                  "name": "Non-Null",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "TreeEntry",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "oid",
              "description": "The Git object ID",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "GitObjectID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "repository",
              "description": "The Repository the Git object belongs to",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "kind": "INTERFACE",
              "name": "GitObject",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "TreeEntry",
          "description": "Represents a Git tree entry.",
          "fields": [
            {
              "name": "mode",
              "description": "Entry file mode.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "name",
              "description": "Entry file name.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "object",
              "description": "Entry file object.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "GitObject",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "oid",
              "description": "Entry file Git object ID.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "GitObjectID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "repository",
              "description": "The Repository the tree entry belongs to",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "type",
              "description": "Entry file type.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "SCALAR",
          "name": "GitObjectID",
          "description": "A Git object ID.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INTERFACE",
          "name": "GitObject",
          "description": "Represents a Git object.",
          "fields": [
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "oid",
              "description": "The Git object ID",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "GitObjectID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "repository",
              "description": "The Repository the Git object belongs to",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": [
            {
              "kind": "OBJECT",
              "name": "Blob",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "Commit",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "Tag",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "Tree",
              "ofType": null
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "GitActor",
          "description": "Represents an actor in a Git commit (ie. an author or committer).",
          "fields": [
            {
              "name": "date",
              "description": "The timestamp of the Git action (authoring or committing).",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "GitTimestamp",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "email",
              "description": "The email in the Git commit.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "name",
              "description": "The name in the Git commit.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "user",
              "description": "The GitHub user corresponding to the email field. Null if no such user exists.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "SCALAR",
          "name": "GitTimestamp",
          "description": "An ISO-8601 encoded date string. Unlike the DateTime type, GitTimestamp is not converted in UTC.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "SCALAR",
          "name": "HTML",
          "description": "A string containing HTML code.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "Author",
          "description": "Specifies an author for filtering Git commits.",
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": "ID of a User to filter by. If non-null, only commits authored by this user will be returned. This field takes precedence over emails.",
              "type": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "emails",
              "description": "Email addresses to filter by. Commits authored by any of the specified email addresses will be returned.",
              "type": {
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "NON_NULL",
                  "name": "Non-Null",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "CommitHistoryConnection",
          "description": null,
          "fields": [
            {
              "name": "edges",
              "description": null,
              "args": [],
              "type": {
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "CommitEdge",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "pageInfo",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "path",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "CommitEdge",
          "description": null,
          "fields": [
            {
              "name": "cursor",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "node",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Commit",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "PageInfo",
          "description": "Metadata about a connection",
          "fields": [
            {
              "name": "endCursor",
              "description": "When paginating forwards, the cursor to continue",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "hasNextPage",
              "description": "Indicates if there are more pages to fetch",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "hasPreviousPage",
              "description": "Indicates if there are any pages prior to the current page",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "startCursor",
              "description": "When paginating backwards, the cursor to continue",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INTERFACE",
          "name": "GitSignature",
          "description": "Information about a signature (GPG or S/MIME) on a Commit or Tag.",
          "fields": [
            {
              "name": "email",
              "description": "Email used to sign this object.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "isValid",
              "description": "True if the signature is valid and verified by GitHub.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "payload",
              "description": "Payload for GPG signing object. Raw ODB object without the signature header.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "signature",
              "description": "ASCII-armored signature header from object.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "signer",
              "description": "GitHub user corresponding to the email signing this commit.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "state",
              "description": "The state of this signature. `VALID` if signature is valid and verified by GitHub, otherwise represents reason why signature is considered invalid.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "GitSignatureState",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": [
            {
              "kind": "OBJECT",
              "name": "GpgSignature",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "UnknownSignature",
              "ofType": null
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "GitSignatureState",
          "description": "The state of a Git signature.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "VALID",
              "description": "Valid signature and verified by GitHub.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "INVALID",
              "description": "Invalid signature.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MALFORMED_SIG",
              "description": "Malformed signature.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "UNKNOWN_KEY",
              "description": "Key used for signing not known to GitHub.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "BAD_EMAIL",
              "description": "Invalid email used for signing.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "UNVERIFIED_EMAIL",
              "description": "Email used for signing unverified on GitHub.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "NO_USER",
              "description": "Email used for signing not known to GitHub.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "UNKNOWN_SIG_TYPE",
              "description": "Unknown signature type.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "UNSIGNED",
              "description": "Unsigned.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "GPGVERIFY_UNAVAILABLE",
              "description": "Internal error - the GPG verification service is unavailable at the moment.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "GPGVERIFY_ERROR",
              "description": "Internal error - the GPG verification service misbehaved.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "NOT_SIGNING_KEY",
              "description": "The usage flags for the key that signed this don't allow signing.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "EXPIRED_KEY",
              "description": "Signing key expired.",
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "Status",
          "description": "Represents a commit status.",
          "fields": [
            {
              "name": "commit",
              "description": "The commit this status is attached to.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Commit",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "context",
              "description": "Looks up an individual status context by context name.",
              "args": [
                {
                  "name": "name",
                  "description": "The context name.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "StatusContext",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "contexts",
              "description": "The individual status contexts for this commit.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "LIST",
                  "name": "List",
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "StatusContext"
                    }
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "state",
              "description": "The combined commit status.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "StatusState",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "StatusState",
          "description": "The possible commit status states.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "EXPECTED",
              "description": "Status is expected.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ERROR",
              "description": "Status is errored.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "FAILURE",
              "description": "Status is failing.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "PENDING",
              "description": "Status is pending.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "SUCCESS",
              "description": "Status is successful.",
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "StatusContext",
          "description": "Represents an individual commit status context",
          "fields": [
            {
              "name": "application",
              "description": "The application that created this status context, if any.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "OauthApplication",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "commit",
              "description": "This commit this status context is attached to.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Commit",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "context",
              "description": "The name of this status context.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createdAt",
              "description": "When this status context was created.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "creator",
              "description": "The user that created this status context.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "description",
              "description": "The description for this status context.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "state",
              "description": "The state of this status context.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "StatusState",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "targetURL",
              "description": "The URL for this status context.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "OauthApplication",
          "description": "Represents an OAuth application",
          "fields": [
            {
              "name": "logoURL",
              "description": "A URL pointing to the application's logo.",
              "args": [
                {
                  "name": "size",
                  "description": "The size of the resulting square image.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "name",
              "description": "The name of the application.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "url",
              "description": "The URL to the application's homepage.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "user",
              "description": "The user associated with this application.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "IssueState",
          "description": "The possible states of an issue.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "OPEN",
              "description": "An issue that is still open",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CLOSED",
              "description": "An issue that has been closed",
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "IssueConnection",
          "description": "A list of issues that have been opened in relation to the parent.",
          "fields": [
            {
              "name": "edges",
              "description": null,
              "args": [],
              "type": {
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "IssueEdge",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "pageInfo",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "totalCount",
              "description": "Identifies the total count of items in the connection.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "IssueEdge",
          "description": null,
          "fields": [
            {
              "name": "cursor",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "node",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Issue",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "Issue",
          "description": "An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project.",
          "fields": [
            {
              "name": "assignees",
              "description": "A list of Users assigned to the Issue.",
              "args": [
                {
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "UserConnection",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "author",
              "description": "Identifies the author of the issue.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "body",
              "description": "Identifies the body of the issue.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "comments",
              "description": "A list of comments associated with the Issue.",
              "args": [
                {
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "IssueCommentConnection",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "databaseId",
              "description": "Identifies the primary key from the database.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": true,
              "deprecationReason": "Exposed database IDs will eventually be removed in favor of global Relay IDs."
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "labels",
              "description": "A list of labels associated with the Issue.",
              "args": [
                {
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "LabelConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "liveReactionUpdatesEnabled",
              "description": "Are reaction live updates enabled for this subject.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "milestone",
              "description": "Identifies the milestone associated with the issue.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Milestone",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "number",
              "description": "Identifies the issue number.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "participants",
              "description": "A list of Users that are participating in the Issue's conversation.",
              "args": [
                {
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "UserConnection",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "reactionGroups",
              "description": "A list of Reactions grouped by content left on the subject.",
              "args": [],
              "type": {
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "NON_NULL",
                  "name": "Non-Null",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ReactionGroup",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "reactions",
              "description": "A list of Reactions left on the Issue.",
              "args": [
                {
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "content",
                  "description": "Allows filtering Reactions by emoji.",
                  "type": {
                    "kind": "ENUM",
                    "name": "ReactionContent",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "orderBy",
                  "description": "Allows specifying the order in which reactions are returned.",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "ReactionOrder",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ReactionConnection",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "reactionsWebsocket",
              "description": "The websocket channel ID for reaction live updates.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "repository",
              "description": "Identifies the repository associated with the issue.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "state",
              "description": "Identifies the state of the issue.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "IssueState",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "timeline",
              "description": "A list of events associated with an Issue or PullRequest.",
              "args": [
                {
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "since",
                  "description": "Allows filtering timeline events by a `since` timestamp.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "IssueEventTypesConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "title",
              "description": "Identifies the issue title.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "viewerCanReact",
              "description": "Can user react to this subject",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "websocket",
              "description": "The websocket channel ID for live updates.",
              "args": [
                {
                  "name": "channel",
                  "description": "The channel to use.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "IssuePubSubTopic",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "kind": "INTERFACE",
              "name": "Reactable",
              "ofType": null
            },
            {
              "kind": "INTERFACE",
              "name": "Timeline",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "Milestone",
          "description": "Represents a Milestone object on a given repository.",
          "fields": [
            {
              "name": "closedIssueCount",
              "description": "Identifies the number of issues currently closed in this milestone.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createdBy",
              "description": "Identifies the creator of the milestone.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "description",
              "description": "Identifies the description of the milestone.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "dueOn",
              "description": "Identifies the due date of the milestone.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "openIssueCount",
              "description": "Identifies the number of issues currently open in this milestone.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "repository",
              "description": "The repository associated with this milestone.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "state",
              "description": "Identifies the state of the milestone.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "MilestoneState",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "title",
              "description": "Identifies the title of the milestone.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "MilestoneState",
          "description": "The possible states of a milestone.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "OPEN",
              "description": "A milestone that is still open.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CLOSED",
              "description": "A milestone that has been closed.",
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "UserConnection",
          "description": "A list of users that are connected to the parent.",
          "fields": [
            {
              "name": "edges",
              "description": null,
              "args": [],
              "type": {
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "UserEdge",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "pageInfo",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "totalCount",
              "description": "Identifies the total count of items in the connection.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "UserEdge",
          "description": null,
          "fields": [
            {
              "name": "cursor",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "node",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "IssueCommentConnection",
          "description": null,
          "fields": [
            {
              "name": "edges",
              "description": null,
              "args": [],
              "type": {
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "IssueCommentEdge",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "pageInfo",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "IssueCommentEdge",
          "description": null,
          "fields": [
            {
              "name": "cursor",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "node",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "IssueComment",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "IssueComment",
          "description": "Represents a comment on an Issue.",
          "fields": [
            {
              "name": "author",
              "description": "Identifies the author of the comment.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "body",
              "description": "Identifies the comment body.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "databaseId",
              "description": "Identifies the primary key from the database.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": true,
              "deprecationReason": "Exposed database IDs will eventually be removed in favor of global Relay IDs."
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "issue",
              "description": "Identifies the issue associated with the comment.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Issue",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "liveReactionUpdatesEnabled",
              "description": "Are reaction live updates enabled for this subject.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "reactionGroups",
              "description": "A list of Reactions grouped by content left on the subject.",
              "args": [],
              "type": {
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "NON_NULL",
                  "name": "Non-Null",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ReactionGroup",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "reactions",
              "description": "A list of Reactions left on the Issue.",
              "args": [
                {
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "content",
                  "description": "Allows filtering Reactions by emoji.",
                  "type": {
                    "kind": "ENUM",
                    "name": "ReactionContent",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "orderBy",
                  "description": "Allows specifying the order in which reactions are returned.",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "ReactionOrder",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ReactionConnection",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "reactionsWebsocket",
              "description": "The websocket channel ID for reaction live updates.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "repository",
              "description": "The repository associated with this reaction subject.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null
                }
              },
              "isDeprecated": true,
              "deprecationReason": "Future reaction subjects may not be scoped under repositories."
            },
            {
              "name": "viewerCanReact",
              "description": "Can user react to this subject",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "websocket",
              "description": "The websocket channel ID for live updates.",
              "args": [
                {
                  "name": "channel",
                  "description": "The channel to use.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "IssuePubSubTopic",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "kind": "INTERFACE",
              "name": "Reactable",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "IssuePubSubTopic",
          "description": "The possible PubSub channels for an issue.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "UPDATED",
              "description": "The channel ID for observing issue updates.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MARKASREAD",
              "description": "The channel ID for marking an issue as read.",
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "LabelConnection",
          "description": null,
          "fields": [
            {
              "name": "edges",
              "description": null,
              "args": [],
              "type": {
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "LabelEdge",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "pageInfo",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "LabelEdge",
          "description": null,
          "fields": [
            {
              "name": "cursor",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "node",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Label",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "Label",
          "description": "A label for categorizing Issues or Milestones with a given Repository.",
          "fields": [
            {
              "name": "color",
              "description": "Identifies the label color.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "name",
              "description": "Identifies the label name.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "repository",
              "description": "The repository associated with this label.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "PullRequestState",
          "description": "The possible states of a pull request.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "OPEN",
              "description": "A pull request that is still open.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CLOSED",
              "description": "A pull request that has been closed without being merged.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MERGED",
              "description": "A pull request that has been closed by being merged.",
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "PullRequestConnection",
          "description": "A list of pull requests that have been opened in relation to the parent.",
          "fields": [
            {
              "name": "edges",
              "description": null,
              "args": [],
              "type": {
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PullRequestEdge",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "pageInfo",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "totalCount",
              "description": "Identifies the total count of items in the connection.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "PullRequestEdge",
          "description": null,
          "fields": [
            {
              "name": "cursor",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "node",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "PullRequest",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "PullRequest",
          "description": "A repository pull request.",
          "fields": [
            {
              "name": "author",
              "description": "The user associated with this pull request.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "body",
              "description": "Identifies the body of the pull request.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "comments",
              "description": "A list of comments associated with the pull request.",
              "args": [
                {
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "IssueCommentConnection",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "databaseId",
              "description": "Identifies the primary key from the database.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": true,
              "deprecationReason": "Exposed database IDs will eventually be removed in favor of global Relay IDs."
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "number",
              "description": "Identifies the pull request number.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "repository",
              "description": "The repository associated with this pull request.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "reviews",
              "description": "A list of reviews associated with the pull request.",
              "args": [
                {
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "PullRequestReviewConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "state",
              "description": "Identifies the state of the pull request.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "PullRequestState",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "timeline",
              "description": "A list of events associated with an Issue or PullRequest.",
              "args": [
                {
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "since",
                  "description": "Allows filtering timeline events by a `since` timestamp.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "IssueEventTypesConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "title",
              "description": "Identifies the pull request title.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "websocket",
              "description": "The websocket channel ID for live updates.",
              "args": [
                {
                  "name": "channel",
                  "description": "The channel to use.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "PullRequestPubSubTopic",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "kind": "INTERFACE",
              "name": "Timeline",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "PullRequestReviewConnection",
          "description": null,
          "fields": [
            {
              "name": "edges",
              "description": null,
              "args": [],
              "type": {
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PullRequestReviewEdge",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "pageInfo",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "PullRequestReviewEdge",
          "description": null,
          "fields": [
            {
              "name": "cursor",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "node",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "PullRequestReview",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "PullRequestReview",
          "description": "A review object for a given pull request.",
          "fields": [
            {
              "name": "author",
              "description": "Identifies the author associated with this pull request review.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "body",
              "description": "Identifies the pull request review body.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "comments",
              "description": "A list of review comments for the current pull request review.",
              "args": [
                {
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PullRequestReviewCommentConnection",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "head",
              "description": "Identifies the commit associated with this pull request review.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Commit",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "pullRequest",
              "description": "Identifies the pull request associated with this pull request review.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PullRequest",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "state",
              "description": "Identifies the current state of the pull request review.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "PullRequestReviewCommentConnection",
          "description": null,
          "fields": [
            {
              "name": "edges",
              "description": null,
              "args": [],
              "type": {
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PullRequestReviewCommentEdge",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "pageInfo",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "PullRequestReviewCommentEdge",
          "description": null,
          "fields": [
            {
              "name": "cursor",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "node",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "PullRequestReviewComment",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "PullRequestReviewComment",
          "description": "A review comment associated with a given repository pull request.",
          "fields": [
            {
              "name": "author",
              "description": "The user associated with this review comment.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "body",
              "description": "The comment body of this review comment.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "commit",
              "description": "Identifies the commit associated with the comment.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Commit",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "databaseId",
              "description": "Identifies the primary key from the database.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": true,
              "deprecationReason": "Exposed database IDs will eventually be removed in favor of global Relay IDs."
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "liveReactionUpdatesEnabled",
              "description": "Are reaction live updates enabled for this subject.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "position",
              "description": "The line index in the diff to which the comment applies.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "pullRequest",
              "description": "The pull request associated with this review comment.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PullRequest",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "reactionGroups",
              "description": "A list of Reactions grouped by content left on the subject.",
              "args": [],
              "type": {
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "NON_NULL",
                  "name": "Non-Null",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ReactionGroup",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "reactions",
              "description": "A list of Reactions left on the Issue.",
              "args": [
                {
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "content",
                  "description": "Allows filtering Reactions by emoji.",
                  "type": {
                    "kind": "ENUM",
                    "name": "ReactionContent",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "orderBy",
                  "description": "Allows specifying the order in which reactions are returned.",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "ReactionOrder",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ReactionConnection",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "reactionsWebsocket",
              "description": "The websocket channel ID for reaction live updates.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "repository",
              "description": "The repository associated with this review comment.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "viewerCanReact",
              "description": "Can user react to this subject",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "websocket",
              "description": "The websocket channel ID for live updates.",
              "args": [
                {
                  "name": "channel",
                  "description": "The channel to use.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "PullRequestPubSubTopic",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "kind": "INTERFACE",
              "name": "Reactable",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "PullRequestPubSubTopic",
          "description": "The possible PubSub channels for a pull request.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "UPDATED",
              "description": "The channel ID for observing pull request updates.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MARKASREAD",
              "description": "The channel ID for marking an pull request as read.",
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "MilestoneConnection",
          "description": null,
          "fields": [
            {
              "name": "edges",
              "description": null,
              "args": [],
              "type": {
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "MilestoneEdge",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "pageInfo",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "MilestoneEdge",
          "description": null,
          "fields": [
            {
              "name": "cursor",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "node",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Milestone",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "Ref",
          "description": "Represents a Git reference.",
          "fields": [
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "name",
              "description": "The ref name.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "prefix",
              "description": "The ref's prefix, such as `refs/heads/` or `refs/tags/`.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "repository",
              "description": "The repository the ref belongs to.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "target",
              "description": "The object the ref points to.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "GitObject",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "StarOrder",
          "description": "Ways in which star connections can be ordered.",
          "fields": null,
          "inputFields": [
            {
              "name": "field",
              "description": "The field in which to order nodes by.",
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "StarOrderField",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "direction",
              "description": "The direction in which to order nodes.",
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "OrderDirection",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "StargazerConnection",
          "description": null,
          "fields": [
            {
              "name": "edges",
              "description": null,
              "args": [],
              "type": {
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "StargazerEdge",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "pageInfo",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "totalCount",
              "description": "Identifies the total count of items in the connection.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "StargazerEdge",
          "description": null,
          "fields": [
            {
              "name": "cursor",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "node",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "starredAt",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "OrganizationConnection",
          "description": "A list of organizations that are connected to the parent.",
          "fields": [
            {
              "name": "edges",
              "description": null,
              "args": [],
              "type": {
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "OrganizationEdge",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "pageInfo",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "totalCount",
              "description": "Identifies the total count of items in the connection.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "OrganizationEdge",
          "description": null,
          "fields": [
            {
              "name": "cursor",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "node",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Organization",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "Organization",
          "description": "An account on GitHub, with one or more owners, that has repositories, members and teams.",
          "fields": [
            {
              "name": "avatarURL",
              "description": "A URL pointing to the org's public avatar.",
              "args": [
                {
                  "name": "size",
                  "description": "The size of the resulting square image.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "login",
              "description": "The username used to login.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "name",
              "description": "The organizations's public profile name.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "repositories",
              "description": "A list of repositories that the user owns.",
              "args": [
                {
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "privacy",
                  "description": "If non-null, filters repositories according to privacy",
                  "type": {
                    "kind": "ENUM",
                    "name": "RepositoryPrivacy",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "isFork",
                  "description": "If non-null, filters repositories according to whether they are forks of another repository",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "orderBy",
                  "description": "Ordering options for repositories returned from the connection",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "RepositoryOrder",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "RepositoryConnection",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "repository",
              "description": "Find Repository.",
              "args": [
                {
                  "name": "name",
                  "description": "Name of Repository to find.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "Repository",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "kind": "INTERFACE",
              "name": "RepositoryOwner",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "StarredRepositoryConnection",
          "description": null,
          "fields": [
            {
              "name": "edges",
              "description": null,
              "args": [],
              "type": {
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "StarredRepositoryEdge",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "pageInfo",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "totalCount",
              "description": "Identifies the total count of items in the connection.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "StarredRepositoryEdge",
          "description": null,
          "fields": [
            {
              "name": "cursor",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "node",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "starredAt",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INTERFACE",
          "name": "RepositoryOwner",
          "description": "Represents an owner of a Repository.",
          "fields": [
            {
              "name": "avatarURL",
              "description": "A URL pointing to the owner's public avatar.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "login",
              "description": "The username used to login.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "repositories",
              "description": "A list of repositories that the user owns.",
              "args": [
                {
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "privacy",
                  "description": "If non-null, filters repositories according to privacy",
                  "type": {
                    "kind": "ENUM",
                    "name": "RepositoryPrivacy",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "isFork",
                  "description": "If non-null, filters repositories according to whether they are forks of another repository",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "orderBy",
                  "description": "Ordering options for repositories returned from the connection",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "RepositoryOrder",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "RepositoryConnection",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "repository",
              "description": "Find Repository.",
              "args": [
                {
                  "name": "name",
                  "description": "Name of Repository to find.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "Repository",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": [
            {
              "kind": "OBJECT",
              "name": "Organization",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "RepositoryPrivacy",
          "description": "The privacy of a repository",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "PUBLIC",
              "description": "Public",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "PRIVATE",
              "description": "Private",
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "SearchType",
          "description": "Represents the individual results of a search.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "ISSUE",
              "description": "Returns results matching issues in repositories.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "REPOSITORY",
              "description": "Returns results matching repositories.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "USER",
              "description": "Returns results matching users on GitHub.",
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "SearchResultItemConnection",
          "description": "A list of results that matched against a search query.",
          "fields": [
            {
              "name": "codeCount",
              "description": "The number of pieces of code that matched the search query.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "edges",
              "description": null,
              "args": [],
              "type": {
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "SearchResultItemEdge",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "issueCount",
              "description": "The number of issues that matched the search query.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "pageInfo",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "repositoryCount",
              "description": "The number of repositories that matched the search query.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "userCount",
              "description": "The number of users that matched the search query.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "wikiCount",
              "description": "The number of wiki pages that matched the search query.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "SearchResultItemEdge",
          "description": null,
          "fields": [
            {
              "name": "cursor",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "node",
              "description": null,
              "args": [],
              "type": {
                "kind": "UNION",
                "name": "SearchResultItem",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "UNION",
          "name": "SearchResultItem",
          "description": "The results of a search.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": [
            {
              "kind": "OBJECT",
              "name": "Issue",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "PullRequest",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "Repository",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "Organization",
              "ofType": null
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "Mutation",
          "description": "The root query for implementing GraphQL mutations.",
          "fields": [
            {
              "name": "addComment",
              "description": "Adds a comment to an Issue or Pull Request.",
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "AddCommentInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "AddCommentPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "addProjectCard",
              "description": "Adds a card to a ProjectColumn. Either `contentId` or `note` must be provided but **not** both.",
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "AddProjectCardInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "AddProjectCardPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "addProjectColumn",
              "description": "Adds a column to a Project.",
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "AddProjectColumnInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "AddProjectColumnPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "addReaction",
              "description": "Adds a reaction to a subject.",
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "AddReactionInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "AddReactionPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createProject",
              "description": "Creates a new project.",
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "CreateProjectInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "CreateProjectPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "deleteProject",
              "description": "Deletes a project.",
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "DeleteProjectInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "DeleteProjectPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "deleteProjectCard",
              "description": "Deletes a project card.",
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "DeleteProjectCardInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "DeleteProjectCardPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "deleteProjectColumn",
              "description": "Deletes a project column.",
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "DeleteProjectColumnInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "DeleteProjectColumnPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "moveProjectCard",
              "description": "Moves a project card to another place.",
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "MoveProjectCardInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "MoveProjectCardPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "moveProjectColumn",
              "description": "Moves a project column to another place.",
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "MoveProjectColumnInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "MoveProjectColumnPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "removeReaction",
              "description": "Removes a reaction from a subject.",
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "RemoveReactionInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "RemoveReactionPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "updateProject",
              "description": "Updates an existing project.",
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "UpdateProjectInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "UpdateProjectPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "updateProjectCard",
              "description": "Updates an existing project card.",
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "UpdateProjectCardInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "UpdateProjectCardPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "updateProjectColumn",
              "description": "Updates an existing project column.",
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "UpdateProjectColumnInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "UpdateProjectColumnPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "updateSubscription",
              "description": "Updates viewers repository subscription state.",
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "UpdateSubscriptionInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "UpdateSubscriptionPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "AddReactionPayload",
          "description": "Autogenerated return type of AddReaction",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "reaction",
              "description": "The reaction object.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Reaction",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "Reaction",
          "description": "An emoji reaction to a particular piece of content.",
          "fields": [
            {
              "name": "content",
              "description": "Identifies the emoji reaction.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "ReactionContent",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createdAt",
              "description": "When the reaction was created.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "databaseId",
              "description": "Identifies the primary key from the database.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": true,
              "deprecationReason": "Exposed database IDs will eventually be removed in favor of global Relay IDs."
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "user",
              "description": "Identifies the user who created this reaction.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "ReactionContent",
          "description": "Emojis that can be attached to Issues, Pull Requests and Comments.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "THUMBS_UP",
              "description": "Represents the 👍 emoji.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "THUMBS_DOWN",
              "description": "Represents the 👎 emoji.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "LAUGH",
              "description": "Represents the 😄 emoji.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "HOORAY",
              "description": "Represents the 🎉 emoji.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CONFUSED",
              "description": "Represents the 😕 emoji.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "HEART",
              "description": "Represents the ❤️ emoji.",
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "RemoveReactionPayload",
          "description": "Autogenerated return type of RemoveReaction",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "reaction",
              "description": "The reaction object.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Reaction",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "AddCommentPayload",
          "description": "Autogenerated return type of AddComment",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "commentEdge",
              "description": "The edge from the subject's comment connection.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "IssueCommentEdge",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "subject",
              "description": "The subject",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Node",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "timelineEdge",
              "description": "The edge from the subject's timeline connection.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "IssueEventTypesEdge",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "IssueEventTypesEdge",
          "description": null,
          "fields": [
            {
              "name": "cursor",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "node",
              "description": null,
              "args": [],
              "type": {
                "kind": "UNION",
                "name": "IssueEventTypes",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "UNION",
          "name": "IssueEventTypes",
          "description": "An item that can return different issue event types and comments.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": [
            {
              "kind": "OBJECT",
              "name": "PullRequestReview",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "PullRequestReviewThread",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "PullRequestReviewComment",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "IssueComment",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "ClosedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "ReopenedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "SubscribedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "UnsubscribedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "MergedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "ReferencedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "MentionedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "AssignedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "UnassignedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "LabeledEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "UnlabeledEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "MilestonedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "DemilestonedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "RenamedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "LockedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "UnlockedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "DeployedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "HeadRefDeletedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "HeadRefRestoredEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "HeadRefForcePushedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "BaseRefForcePushedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "Commit",
              "ofType": null
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "UpdateSubscriptionPayload",
          "description": "Autogenerated return type of UpdateSubscription",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "subscribable",
              "description": "The input subscribable entity.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Subscribable",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INTERFACE",
          "name": "Subscribable",
          "description": "Entities that can be subscribed to for web and email notifications.",
          "fields": [
            {
              "name": "viewerCanSubscribe",
              "description": "Check if the viewer is ability to change their subscription status.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "viewerSubscription",
              "description": "Identifies if the viewer is watching, not watching or ignoring.",
              "args": [],
              "type": {
                "kind": "ENUM",
                "name": "SubscriptionState",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": [
            {
              "kind": "OBJECT",
              "name": "Repository",
              "ofType": null
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "SubscriptionState",
          "description": "The possible states of a subscription.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "UNSUBSCRIBED",
              "description": "The User is only notified when particpating or @mentioned.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "SUBSCRIBED",
              "description": "The User is notified of all conversations.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "IGNORED",
              "description": "The User is never notified.",
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "CreateProjectPayload",
          "description": "Autogenerated return type of CreateProject",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "project",
              "description": "The new project.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Project",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "Project",
          "description": "Projects manage issues and pull requests within a repository.",
          "fields": [
            {
              "name": "body",
              "description": "The project's description body.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "columns",
              "description": "List of columns in the project",
              "args": [
                {
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ProjectColumnConnection",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createdAt",
              "description": "When this project was created.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "creator",
              "description": "The user that originally created the project.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "databaseId",
              "description": "Identifies the primary key from the database.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": true,
              "deprecationReason": "Exposed database IDs will eventually be removed in favor of global Relay IDs."
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "name",
              "description": "The project's name.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "number",
              "description": "The project's number.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "owner",
              "description": "The project's owner. Currently limited to repositories.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "ProjectOwner",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "updatedAt",
              "description": "When this project was last updated.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INTERFACE",
          "name": "ProjectOwner",
          "description": "Represents an owner of a Project.",
          "fields": [
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "project",
              "description": "Find project by number.",
              "args": [
                {
                  "name": "number",
                  "description": "The project number to find.",
                  "type": {
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "Project",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "projects",
              "description": "A list of projects under the owner.",
              "args": [
                {
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "ProjectConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "viewerCanCreateProjects",
              "description": "Can the current viewer create new projects on this owner.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": [
            {
              "kind": "OBJECT",
              "name": "Repository",
              "ofType": null
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "ProjectConnection",
          "description": null,
          "fields": [
            {
              "name": "edges",
              "description": null,
              "args": [],
              "type": {
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ProjectEdge",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "pageInfo",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "ProjectEdge",
          "description": null,
          "fields": [
            {
              "name": "cursor",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "node",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Project",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "ProjectColumnConnection",
          "description": null,
          "fields": [
            {
              "name": "edges",
              "description": null,
              "args": [],
              "type": {
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ProjectColumnEdge",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "pageInfo",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "ProjectColumnEdge",
          "description": null,
          "fields": [
            {
              "name": "cursor",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "node",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "ProjectColumn",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "ProjectColumn",
          "description": "A column inside a project.",
          "fields": [
            {
              "name": "cards",
              "description": "List of cards in the column",
              "args": [
                {
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ProjectCardConnection",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createdAt",
              "description": "When this column was created.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "databaseId",
              "description": "Identifies the primary key from the database.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": true,
              "deprecationReason": "Exposed database IDs will eventually be removed in favor of global Relay IDs."
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "name",
              "description": "The project column's name.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "project",
              "description": "The project that contains this column.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Project",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "updatedAt",
              "description": "When this column was last updated.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "ProjectCardConnection",
          "description": null,
          "fields": [
            {
              "name": "edges",
              "description": null,
              "args": [],
              "type": {
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ProjectCardEdge",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "pageInfo",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "ProjectCardEdge",
          "description": null,
          "fields": [
            {
              "name": "cursor",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "node",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "ProjectCard",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "ProjectCard",
          "description": "A card in a project.",
          "fields": [
            {
              "name": "content",
              "description": "The card content item",
              "args": [],
              "type": {
                "kind": "UNION",
                "name": "ProjectCardItem",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createdAt",
              "description": "When this card was created.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "creator",
              "description": "The user who created this card",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "databaseId",
              "description": "Identifies the primary key from the database.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": true,
              "deprecationReason": "Exposed database IDs will eventually be removed in favor of global Relay IDs."
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "note",
              "description": "The card note",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "projectColumn",
              "description": "The column that contains this card.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ProjectColumn",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "state",
              "description": "The state of ProjectCard",
              "args": [],
              "type": {
                "kind": "ENUM",
                "name": "ProjectCardState",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "updatedAt",
              "description": "When this card was last updated.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "ProjectCardState",
          "description": "Various content states of a ProjectCard",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "CONTENT_ONLY",
              "description": "The card has content only.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "NOTE_ONLY",
              "description": "The card has a note only.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "REDACTED",
              "description": "The card is redacted.",
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "UNION",
          "name": "ProjectCardItem",
          "description": "Types that can be inside Project Cards.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": [
            {
              "kind": "OBJECT",
              "name": "Issue",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "PullRequest",
              "ofType": null
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "UpdateProjectPayload",
          "description": "Autogenerated return type of UpdateProject",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "project",
              "description": "The updated project.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Project",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "DeleteProjectPayload",
          "description": "Autogenerated return type of DeleteProject",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "owner",
              "description": "The repository the project was removed from.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "ProjectOwner",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "AddProjectColumnPayload",
          "description": "Autogenerated return type of AddProjectColumn",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "columnEdge",
              "description": "The edge from the project's column connection.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ProjectColumnEdge",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "project",
              "description": "The project",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Project",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "MoveProjectColumnPayload",
          "description": "Autogenerated return type of MoveProjectColumn",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "columnEdge",
              "description": "The new edge of the moved column.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ProjectColumnEdge",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "UpdateProjectColumnPayload",
          "description": "Autogenerated return type of UpdateProjectColumn",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "projectColumn",
              "description": "The updated project column.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ProjectColumn",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "DeleteProjectColumnPayload",
          "description": "Autogenerated return type of DeleteProjectColumn",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "deletedColumnId",
              "description": "The deleted column ID.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "project",
              "description": "The project the deleted column was in.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Project",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "AddProjectCardPayload",
          "description": "Autogenerated return type of AddProjectCard",
          "fields": [
            {
              "name": "cardEdge",
              "description": "The edge from the ProjectColumn's card connection.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ProjectCardEdge",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "projectColumn",
              "description": "The ProjectColumn",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Project",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "UpdateProjectCardPayload",
          "description": "Autogenerated return type of UpdateProjectCard",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "projectCard",
              "description": "The updated ProjectCard.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ProjectCard",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "MoveProjectCardPayload",
          "description": "Autogenerated return type of MoveProjectCard",
          "fields": [
            {
              "name": "cardEdge",
              "description": "The new edge of the moved card.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ProjectCardEdge",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "DeleteProjectCardPayload",
          "description": "Autogenerated return type of DeleteProjectCard",
          "fields": [
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "column",
              "description": "The column the deleted card was in.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ProjectColumn",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "deletedCardId",
              "description": "The deleted card ID.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "__Directive",
          "description": "A query directive in this schema",
          "fields": [
            {
              "name": "args",
              "description": "Arguments allowed to this object",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "LIST",
                  "name": "List",
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "__InputValue"
                    }
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "description",
              "description": "The description for this type",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "locations",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "LIST",
                  "name": "List",
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "__DirectiveLocation"
                    }
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "name",
              "description": "The name of this directive",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "onField",
              "description": "Does this directive apply to fields?",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": true,
              "deprecationReason": "Moved to 'locations' field"
            },
            {
              "name": "onFragment",
              "description": "Does this directive apply to fragments?",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": true,
              "deprecationReason": "Moved to 'locations' field"
            },
            {
              "name": "onOperation",
              "description": "Does this directive apply to operations?",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": true,
              "deprecationReason": "Moved to 'locations' field"
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "__InputValue",
          "description": "An input for a field or InputObject",
          "fields": [
            {
              "name": "defaultValue",
              "description": "The value applied if no other value is provided",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "description",
              "description": "What this value is used for",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "name",
              "description": "The key for this value",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "type",
              "description": "The expected type for this value",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "__Type",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "__Type",
          "description": "A type in the GraphQL schema",
          "fields": [
            {
              "name": "description",
              "description": "What this type represents",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "enumValues",
              "description": "Values for this enum",
              "args": [
                {
                  "name": "includeDeprecated",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  },
                  "defaultValue": "false"
                }
              ],
              "type": {
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "NON_NULL",
                  "name": "Non-Null",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__EnumValue",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "fields",
              "description": "List of fields on this object",
              "args": [
                {
                  "name": "includeDeprecated",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  },
                  "defaultValue": "false"
                }
              ],
              "type": {
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "NON_NULL",
                  "name": "Non-Null",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__Field",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "inputFields",
              "description": "fields on this input object",
              "args": [],
              "type": {
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "NON_NULL",
                  "name": "Non-Null",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__InputValue",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "interfaces",
              "description": "Interfaces which this object implements",
              "args": [],
              "type": {
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "NON_NULL",
                  "name": "Non-Null",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__Type",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "kind",
              "description": "The kind of this type",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "__TypeKind",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "name",
              "description": "The name of this type",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ofType",
              "description": "The modified type of this type",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "__Type",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "possibleTypes",
              "description": "Types which compose this Union or Interface",
              "args": [],
              "type": {
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "NON_NULL",
                  "name": "Non-Null",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__Type",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "__TypeKind",
          "description": "The kinds of types in this GraphQL system",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "SCALAR",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "OBJECT",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "INTERFACE",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "UNION",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ENUM",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "INPUT_OBJECT",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "LIST",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "NON_NULL",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "__Field",
          "description": "Field on a GraphQL type",
          "fields": [
            {
              "name": "args",
              "description": "Arguments allowed to this object",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "LIST",
                  "name": "List",
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "__InputValue"
                    }
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "deprecationReason",
              "description": "Why this field was deprecated",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "description",
              "description": "The description of this field",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "isDeprecated",
              "description": "Is this field deprecated?",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "name",
              "description": "The name for accessing this field",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "type",
              "description": "The return type of this field",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "__Type",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "__EnumValue",
          "description": "A possible value for an Enum",
          "fields": [
            {
              "name": "deprecationReason",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "description",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "isDeprecated",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "name",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "__DirectiveLocation",
          "description": "Parts of the query where a directive may be located",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "QUERY",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MUTATION",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "SUBSCRIPTION",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "FIELD",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "FRAGMENT_DEFINITION",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "FRAGMENT_SPREAD",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "INLINE_FRAGMENT",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "__Schema",
          "description": "A GraphQL schema",
          "fields": [
            {
              "name": "directives",
              "description": "Directives in this schema",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "LIST",
                  "name": "List",
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "__Directive"
                    }
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "mutationType",
              "description": "The mutation root of this schema",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "__Type",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "queryType",
              "description": "The query root of this schema",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "__Type",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "subscriptionType",
              "description": "The subscription root of this schema",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "__Type",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "types",
              "description": "Types in this schema",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "LIST",
                  "name": "List",
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": "Non-Null",
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "__Type"
                    }
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "UNION",
          "name": "ReactableTypes",
          "description": "Types that can have emoji reactions.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": [
            {
              "kind": "OBJECT",
              "name": "CommitComment",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "Issue",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "IssueComment",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "PullRequestReviewComment",
              "ofType": null
            }
          ]
        },
        {
          "kind": "UNION",
          "name": "StarrableTypes",
          "description": "A type that can be starred",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": [
            {
              "kind": "OBJECT",
              "name": "Repository",
              "ofType": null
            }
          ]
        },
        {
          "kind": "ENUM",
          "name": "DeploymentState",
          "description": "The possible deployment states.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "PENDING",
              "description": "The deployment is pending.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "SUCCESS",
              "description": "The deployment was successful.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "FAILURE",
              "description": "The deployment has failed.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "INACTIVE",
              "description": "The deployment is inactive.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ERROR",
              "description": "The deployment experienced an error.",
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "IssueEventType",
          "description": "The possible issue event types.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "ASSIGNED",
              "description": "The issue was assigned to the actor.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "BASE_REF_FORCE_PUSHED",
              "description": "The base branch was force pushed by the actor.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "CLOSED",
              "description": "The issue was closed by the actor.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "DEMILESTONED",
              "description": "The issue had a milestone removed from it.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "DEPLOYED",
              "description": "The branch was deployed by the actor.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "HEAD_REF_DELETED",
              "description": "The head branch was deleted by the actor.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "HEAD_REF_FORCE_PUSHED",
              "description": "The head branch was force pushed by the actor.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "HEAD_REF_RESTORED",
              "description": "The head branch was restored by the actor.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "LABELED",
              "description": "A label was added to the issue.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "LOCKED",
              "description": "The issue was locked by the actor.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MENTIONED",
              "description": "The pull request or issue was mentioned by the actor.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MERGED",
              "description": "The issue was merged by the actor.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MILESTONED",
              "description": "The issue had a milestone added to it.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "REFERENCED",
              "description": "The issue was referenced from a commit message.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "RENAMED",
              "description": "The issue's title was changed.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "REOPENED",
              "description": "The issue was reopened by the actor.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "SUBSCRIBED",
              "description": "The pull request or issue was subscribed to by the actor.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "UNASSIGNED",
              "description": "The issue was unassigned to the actor.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "UNLABELED",
              "description": "A label was removed from the issue.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "UNLOCKED",
              "description": "The issue was unlocked by the actor.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "UNSUBSCRIBED",
              "description": "The pull request or issue was unsubscribed from by the actor.",
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "OrderDirection",
          "description": "Possible directions in which to order a list of items when provided an `orderBy` argument.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "ASC",
              "description": "Specifies an ascending order for a given `orderBy` argument.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "DESC",
              "description": "Specifies a descending order for a given `orderBy` argument.",
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "ReactionOrderField",
          "description": "A list of fields that reactions can be ordered by.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "CREATED_AT",
              "description": "Allows ordering a list of reactions by when they were created.",
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "RepositoryLockReason",
          "description": "The possible reasons a given repsitory could be in a locked state.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "MOVING",
              "description": "The repository is locked due to a move.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "BILLING",
              "description": "The repository is locked due to a billing related reason.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "RENAME",
              "description": "The repository is locked due to a rename.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MIGRATING",
              "description": "The repository is locked due to a migration.",
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "RepositoryOrderField",
          "description": "Properties by which repository connections can be ordered.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "CREATED_AT",
              "description": "Order repositories by creation time",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "UPDATED_AT",
              "description": "Order repositories by update time",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "PUSHED_AT",
              "description": "Order repositories by push time",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "NAME",
              "description": "Order repositories by name",
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "StarOrderField",
          "description": "Properties by which star connections can be ordered.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "STARRED_AT",
              "description": "Allows ordering a list of stars by when they were created.",
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "SCALAR",
          "name": "URI",
          "description": "An RFC 3986, RFC 3987, and RFC 6570 (level 4) compliant URI string.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INTERFACE",
          "name": "IssueEvent",
          "description": "Represents an issue event.",
          "fields": [
            {
              "name": "actor",
              "description": "Identifies the actor (user) associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createdAt",
              "description": "Identifies when the event was created.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "issue",
              "description": "Identifies the issue associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Issue",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "repository",
              "description": "Identifies the repository associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "type",
              "description": "Identifies the event type associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "IssueEventType",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": [
            {
              "kind": "OBJECT",
              "name": "AssignedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "BaseRefForcePushedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "ClosedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "DemilestonedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "DeployedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "HeadRefDeletedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "HeadRefForcePushedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "HeadRefRestoredEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "LabeledEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "LockedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "MentionedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "MergedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "MilestonedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "ReferencedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "RenamedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "ReopenedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "SubscribedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "UnassignedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "UnlabeledEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "UnlockedEvent",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "UnsubscribedEvent",
              "ofType": null
            }
          ]
        },
        {
          "kind": "INTERFACE",
          "name": "Reactable",
          "description": "Represents a subject that can be reacted on.",
          "fields": [
            {
              "name": "databaseId",
              "description": "Identifies the primary key from the database.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": true,
              "deprecationReason": "Exposed database IDs will eventually be removed in favor of global Relay IDs."
            },
            {
              "name": "liveReactionUpdatesEnabled",
              "description": "Are reaction live updates enabled for this subject.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "reactionGroups",
              "description": "A list of Reactions grouped by content left on the subject.",
              "args": [],
              "type": {
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "NON_NULL",
                  "name": "Non-Null",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ReactionGroup",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "reactions",
              "description": "A list of Reactions left on the Issue.",
              "args": [
                {
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "content",
                  "description": "Allows filtering Reactions by emoji.",
                  "type": {
                    "kind": "ENUM",
                    "name": "ReactionContent",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "orderBy",
                  "description": "Allows specifying the order in which reactions are returned.",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "ReactionOrder",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ReactionConnection",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "reactionsWebsocket",
              "description": "The websocket channel ID for reaction live updates.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "repository",
              "description": "The repository associated with this reaction subject.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null
                }
              },
              "isDeprecated": true,
              "deprecationReason": "Future reaction subjects may not be scoped under repositories."
            },
            {
              "name": "viewerCanReact",
              "description": "Can user react to this subject",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": [
            {
              "kind": "OBJECT",
              "name": "CommitComment",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "Issue",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "IssueComment",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "PullRequestReviewComment",
              "ofType": null
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "ReactionGroup",
          "description": "A group of emoji reactions to a particular piece of content.",
          "fields": [
            {
              "name": "content",
              "description": "Identifies the emoji reaction.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "ReactionContent",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createdAt",
              "description": "Identifies when the reaction was created.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "reactions",
              "description": "A list of Reactions in this group.",
              "args": [
                {
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ReactionConnection",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "subject",
              "description": "The subject that was reacted to.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "UNION",
                  "name": "ReactableTypes",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "viewerHasReacted",
              "description": "Whether or not the authenticated user has left a reaction on the subject.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "ReactionConnection",
          "description": "A list of reactions that have been left on the subject.",
          "fields": [
            {
              "name": "edges",
              "description": null,
              "args": [],
              "type": {
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ReactionEdge",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "pageInfo",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "totalCount",
              "description": "Identifies the total count of items in the connection.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "viewerHasReacted",
              "description": "Whether or not the authenticated user has left a reaction on the subject.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "ReactionEdge",
          "description": null,
          "fields": [
            {
              "name": "cursor",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "node",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Reaction",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "ReactionOrder",
          "description": "Ways in which lists of reactions can be ordered upon return.",
          "fields": null,
          "inputFields": [
            {
              "name": "field",
              "description": "The field in which to order reactions by.",
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "ReactionOrderField",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "direction",
              "description": "The direction in which to order reactions by the specified field.",
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "OrderDirection",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INTERFACE",
          "name": "RepositoryInfo",
          "description": "A subset of repository info.",
          "fields": [
            {
              "name": "description",
              "description": "The description of the repository.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "descriptionHTML",
              "description": "The description of the repository rendered to HTML.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "HTML",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "hasIssuesEnabled",
              "description": "Indicates if the repository has issues feature enabled.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "hasWikiEnabled",
              "description": "Indicates if the repository has wiki feature enabled.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "homepageURL",
              "description": "The repository's URL.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "isFork",
              "description": "Identifies if the repository is a fork.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "isLocked",
              "description": "Indicates if the repository has been locked or not.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "isMirror",
              "description": "Identifies if the repository is a mirror.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "isPrivate",
              "description": "Identifies if the repository is private.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "lockReason",
              "description": "The reason the repository has been locked.",
              "args": [],
              "type": {
                "kind": "ENUM",
                "name": "RepositoryLockReason",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "mirrorURL",
              "description": "The repository's original mirror URL.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "name",
              "description": "The name of the repository.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "owner",
              "description": "The User owner of the repository.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "RepositoryOwner",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": [
            {
              "kind": "OBJECT",
              "name": "Repository",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "RepositoryInvitationRepository",
              "ofType": null
            }
          ]
        },
        {
          "kind": "INTERFACE",
          "name": "Timeline",
          "description": "Represents all of the events visible to a user from an Issue or PullRequest timeline.",
          "fields": [
            {
              "name": "timeline",
              "description": "A list of events associated with an Issue or PullRequest.",
              "args": [
                {
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "since",
                  "description": "Allows filtering timeline events by a `since` timestamp.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "IssueEventTypesConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": [
            {
              "kind": "OBJECT",
              "name": "Issue",
              "ofType": null
            },
            {
              "kind": "OBJECT",
              "name": "PullRequest",
              "ofType": null
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "IssueEventTypesConnection",
          "description": null,
          "fields": [
            {
              "name": "edges",
              "description": null,
              "args": [],
              "type": {
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "IssueEventTypesEdge",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "pageInfo",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "Blob",
          "description": "Represents a Git blob.",
          "fields": [
            {
              "name": "byteSize",
              "description": "Byte size of Blob object",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "isBinary",
              "description": "Indicates whether the Blob is binary or text",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "isTruncated",
              "description": "Indicates whether the contents is truncated",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "oid",
              "description": "The Git object ID",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "GitObjectID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "repository",
              "description": "The Repository the Git object belongs to",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "text",
              "description": "UTF8 text data or null if the Blob is binary",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "kind": "INTERFACE",
              "name": "GitObject",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "Deployment",
          "description": "Represents triggered deployment instance.",
          "fields": [
            {
              "name": "commit",
              "description": "Identifies the commit sha of the deployment.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Commit",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createdAt",
              "description": "Identifies when the deployment was created.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "creator",
              "description": "Identifies the user who triggered the deployment.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "repository",
              "description": "Idenfifies the repository associated with the deployment.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "statuses",
              "description": "A list of statuses associated with the deployment.",
              "args": [
                {
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "DeploymentStatusConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "DeploymentStatusConnection",
          "description": null,
          "fields": [
            {
              "name": "edges",
              "description": null,
              "args": [],
              "type": {
                "kind": "LIST",
                "name": "List",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "DeploymentStatusEdge",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "pageInfo",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "DeploymentStatusEdge",
          "description": null,
          "fields": [
            {
              "name": "cursor",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "node",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "DeploymentStatus",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "DeploymentStatus",
          "description": "Describes the status of a given deployment attempt.",
          "fields": [
            {
              "name": "creator",
              "description": "Identifies the user who triggered the deployment.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "deployment",
              "description": "Identifies the deployment associated with status.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Deployment",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "description",
              "description": "Identifies the description of the deployment.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "environmentUrl",
              "description": "Identifies the environment url of the deployment.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "logUrl",
              "description": "Identifies the log url of the deployment.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "state",
              "description": "Identifies the current state of the deployment.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "DeploymentState",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "AssignedEvent",
          "description": "Represents an 'assigned' event on a given issue or pull request.",
          "fields": [
            {
              "name": "actor",
              "description": "Identifies the actor (user) associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createdAt",
              "description": "Identifies when the event was created.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "issue",
              "description": "Identifies the issue associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Issue",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "repository",
              "description": "Identifies the repository associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "subject",
              "description": "Identifies the user who performed the 'assigned' event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "type",
              "description": "Identifies the event type associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "IssueEventType",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "kind": "INTERFACE",
              "name": "IssueEvent",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "BaseRefForcePushedEvent",
          "description": "Represents a 'base_ref_force_pushed' event on a given pull request.",
          "fields": [
            {
              "name": "actor",
              "description": "Identifies the actor (user) associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "afterCommit",
              "description": "Identifies the after commit SHA for the 'base_ref_force_pushed' event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Commit",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "beforeCommit",
              "description": "Identifies the before commit SHA for the 'base_ref_force_pushed' event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Commit",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createdAt",
              "description": "Identifies when the event was created.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "issue",
              "description": "Identifies the issue associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Issue",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ref",
              "description": "Identifies the fully qualified ref name for the 'base_ref_force_pushed' event.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Ref",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "repository",
              "description": "Identifies the repository associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "type",
              "description": "Identifies the event type associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "IssueEventType",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "kind": "INTERFACE",
              "name": "IssueEvent",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "ClosedEvent",
          "description": "Represents a 'closed' event on a given issue or pull request.",
          "fields": [
            {
              "name": "actor",
              "description": "Identifies the actor (user) associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "commit",
              "description": "Identifies the commit associated with the 'closed' event.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Commit",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createdAt",
              "description": "Identifies when the event was created.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "issue",
              "description": "Identifies the issue associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Issue",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "repository",
              "description": "Identifies the repository associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "type",
              "description": "Identifies the event type associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "IssueEventType",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "kind": "INTERFACE",
              "name": "IssueEvent",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "DemilestonedEvent",
          "description": "Represents a 'demilestoned' event on a given issue or pull request.",
          "fields": [
            {
              "name": "actor",
              "description": "Identifies the actor (user) associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createdAt",
              "description": "Identifies when the event was created.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "issue",
              "description": "Identifies the issue associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Issue",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "milestoneTitle",
              "description": "Identifies the milestone title associated with the 'demilestoned' event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "repository",
              "description": "Identifies the repository associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "type",
              "description": "Identifies the event type associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "IssueEventType",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "kind": "INTERFACE",
              "name": "IssueEvent",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "DeployedEvent",
          "description": "Represents a 'deployed' event on a given issue or pull request.",
          "fields": [
            {
              "name": "actor",
              "description": "Identifies the actor (user) associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createdAt",
              "description": "Identifies when the event was created.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "deployment",
              "description": "The deployment associated with the 'deployed' event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Deployment",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "issue",
              "description": "Identifies the issue associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Issue",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ref",
              "description": "The ref associated with the 'deployed' event.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Ref",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "repository",
              "description": "Identifies the repository associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "type",
              "description": "Identifies the event type associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "IssueEventType",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "kind": "INTERFACE",
              "name": "IssueEvent",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "HeadRefDeletedEvent",
          "description": "Represents a 'head_ref_deleted' event on a given pull request.",
          "fields": [
            {
              "name": "actor",
              "description": "Identifies the actor (user) associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createdAt",
              "description": "Identifies when the event was created.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "headRef",
              "description": "Identifies the ref associated with the `head_ref_deleted` event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Ref",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "issue",
              "description": "Identifies the issue associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Issue",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "repository",
              "description": "Identifies the repository associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "type",
              "description": "Identifies the event type associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "IssueEventType",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "kind": "INTERFACE",
              "name": "IssueEvent",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "HeadRefForcePushedEvent",
          "description": "Represents a 'head_ref_force_pushed' event on a given pull request.",
          "fields": [
            {
              "name": "actor",
              "description": "Identifies the actor (user) associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "afterCommit",
              "description": "Identifies the after commit SHA for the 'head_ref_force_pushed' event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Commit",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "beforeCommit",
              "description": "Identifies the before commit SHA for the 'head_ref_force_pushed' event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Commit",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createdAt",
              "description": "Identifies when the event was created.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "issue",
              "description": "Identifies the issue associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Issue",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ref",
              "description": "Identifies the fully qualified ref name for the 'head_ref_force_pushed' event.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Ref",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "repository",
              "description": "Identifies the repository associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "type",
              "description": "Identifies the event type associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "IssueEventType",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "kind": "INTERFACE",
              "name": "IssueEvent",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "HeadRefRestoredEvent",
          "description": "Represents a 'head_ref_restored' event on a given pull request.",
          "fields": [
            {
              "name": "actor",
              "description": "Identifies the actor (user) associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createdAt",
              "description": "Identifies when the event was created.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "issue",
              "description": "Identifies the issue associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Issue",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "repository",
              "description": "Identifies the repository associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "type",
              "description": "Identifies the event type associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "IssueEventType",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "kind": "INTERFACE",
              "name": "IssueEvent",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "LabeledEvent",
          "description": "Represents a 'labeled' event on a given issue or pull request.",
          "fields": [
            {
              "name": "actor",
              "description": "Identifies the actor (user) associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createdAt",
              "description": "Identifies when the event was created.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "issue",
              "description": "Identifies the issue associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Issue",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "label",
              "description": "Identifies the label associated with the 'labeled' event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Label",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "repository",
              "description": "Identifies the repository associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "type",
              "description": "Identifies the event type associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "IssueEventType",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "kind": "INTERFACE",
              "name": "IssueEvent",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "LockedEvent",
          "description": "Represents a 'locked' event on a given issue or pull request.",
          "fields": [
            {
              "name": "actor",
              "description": "Identifies the actor (user) associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createdAt",
              "description": "Identifies when the event was created.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "issue",
              "description": "Identifies the issue associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Issue",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "repository",
              "description": "Identifies the repository associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "type",
              "description": "Identifies the event type associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "IssueEventType",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "kind": "INTERFACE",
              "name": "IssueEvent",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "MentionedEvent",
          "description": "Represents a 'mentioned' event on a given issue or pull request.",
          "fields": [
            {
              "name": "actor",
              "description": "Identifies the actor (user) associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createdAt",
              "description": "Identifies when the event was created.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "issue",
              "description": "Identifies the issue associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Issue",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "repository",
              "description": "Identifies the repository associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "type",
              "description": "Identifies the event type associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "IssueEventType",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "kind": "INTERFACE",
              "name": "IssueEvent",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "MergedEvent",
          "description": "Represents a 'merged' event on a given pull request.",
          "fields": [
            {
              "name": "actor",
              "description": "Identifies the actor (user) associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "commit",
              "description": "Identifies the commit associated with the `merge` event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Commit",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createdAt",
              "description": "Identifies when the event was created.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "issue",
              "description": "Identifies the issue associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Issue",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "mergeRef",
              "description": "Identifies the ref associated with the `merge` event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Ref",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "repository",
              "description": "Identifies the repository associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "type",
              "description": "Identifies the event type associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "IssueEventType",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "kind": "INTERFACE",
              "name": "IssueEvent",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "MilestonedEvent",
          "description": "Represents a 'milestoned' event on a given issue or pull request.",
          "fields": [
            {
              "name": "actor",
              "description": "Identifies the actor (user) associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createdAt",
              "description": "Identifies when the event was created.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "issue",
              "description": "Identifies the issue associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Issue",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "milestoneTitle",
              "description": "Identifies the milestone title associated with the 'milestoned' event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "repository",
              "description": "Identifies the repository associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "type",
              "description": "Identifies the event type associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "IssueEventType",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "kind": "INTERFACE",
              "name": "IssueEvent",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "ReferencedEvent",
          "description": "Represents a 'referenced' event on a given issue or pull request.",
          "fields": [
            {
              "name": "actor",
              "description": "Identifies the actor (user) associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "commit",
              "description": "Identifies the commit associated with the 'referenced' event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Commit",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "commitRepository",
              "description": "Identifies the repository associated with the 'referenced' event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createdAt",
              "description": "Identifies when the event was created.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "issue",
              "description": "Identifies the issue associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Issue",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "repository",
              "description": "Identifies the repository associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "type",
              "description": "Identifies the event type associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "IssueEventType",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "kind": "INTERFACE",
              "name": "IssueEvent",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "RenamedEvent",
          "description": "Represents a 'renamed' event on a given issue or pull request or pull request.",
          "fields": [
            {
              "name": "actor",
              "description": "Identifies the actor (user) associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createdAt",
              "description": "Identifies when the event was created.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "currentTitle",
              "description": "Identifies the current title of the issue or pull request.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "issue",
              "description": "Identifies the issue associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Issue",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "previousTitle",
              "description": "Identifies the previous title of the issue or pull request.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "repository",
              "description": "Identifies the repository associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "type",
              "description": "Identifies the event type associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "IssueEventType",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "kind": "INTERFACE",
              "name": "IssueEvent",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "ReopenedEvent",
          "description": "Represents a 'reopened' event on a given issue or pull request.",
          "fields": [
            {
              "name": "actor",
              "description": "Identifies the actor (user) associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createdAt",
              "description": "Identifies when the event was created.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "issue",
              "description": "Identifies the issue associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Issue",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "repository",
              "description": "Identifies the repository associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "type",
              "description": "Identifies the event type associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "IssueEventType",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "kind": "INTERFACE",
              "name": "IssueEvent",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "SubscribedEvent",
          "description": "Represents a 'subscribed' event on a given issue or pull request.",
          "fields": [
            {
              "name": "actor",
              "description": "Identifies the actor (user) associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createdAt",
              "description": "Identifies when the event was created.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "issue",
              "description": "Identifies the issue associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Issue",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "repository",
              "description": "Identifies the repository associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "type",
              "description": "Identifies the event type associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "IssueEventType",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "kind": "INTERFACE",
              "name": "IssueEvent",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "UnassignedEvent",
          "description": "Represents a 'unassigned' event on a given issue or pull request.",
          "fields": [
            {
              "name": "actor",
              "description": "Identifies the actor (user) associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createdAt",
              "description": "Identifies when the event was created.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "issue",
              "description": "Identifies the issue associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Issue",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "repository",
              "description": "Identifies the repository associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "subject",
              "description": "Identifies the user who performed the 'unassigned' event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "type",
              "description": "Identifies the event type associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "IssueEventType",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "kind": "INTERFACE",
              "name": "IssueEvent",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "UnlabeledEvent",
          "description": "Represents a 'unlabeled' event on a given issue or pull request.",
          "fields": [
            {
              "name": "actor",
              "description": "Identifies the actor (user) associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createdAt",
              "description": "Identifies when the event was created.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "issue",
              "description": "Identifies the issue associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Issue",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "label",
              "description": "Identifies the label associated with the 'unlabeled' event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Label",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "repository",
              "description": "Identifies the repository associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "type",
              "description": "Identifies the event type associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "IssueEventType",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "kind": "INTERFACE",
              "name": "IssueEvent",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "UnlockedEvent",
          "description": "Represents a 'unlocked' event on a given issue or pull request.",
          "fields": [
            {
              "name": "actor",
              "description": "Identifies the actor (user) associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createdAt",
              "description": "Identifies when the event was created.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "issue",
              "description": "Identifies the issue associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Issue",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "repository",
              "description": "Identifies the repository associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "type",
              "description": "Identifies the event type associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "IssueEventType",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "kind": "INTERFACE",
              "name": "IssueEvent",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "UnsubscribedEvent",
          "description": "Represents a 'unsubscribed' event on a given issue or pull request.",
          "fields": [
            {
              "name": "actor",
              "description": "Identifies the actor (user) associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createdAt",
              "description": "Identifies when the event was created.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "issue",
              "description": "Identifies the issue associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Issue",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "repository",
              "description": "Identifies the repository associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "type",
              "description": "Identifies the event type associated with the event.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "IssueEventType",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "kind": "INTERFACE",
              "name": "IssueEvent",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "GpgSignature",
          "description": "Represents a GPG signature on a Commit or Tag.",
          "fields": [
            {
              "name": "email",
              "description": "Email used to sign this object.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "isValid",
              "description": "True if the signature is valid and verified by GitHub.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "keyId",
              "description": "Hex-encoded ID of the key that signed this object.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "payload",
              "description": "Payload for GPG signing object. Raw ODB object without the signature header.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "signature",
              "description": "ASCII-armored signature header from object.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "signer",
              "description": "GitHub user corresponding to the email signing this commit.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "state",
              "description": "The state of this signature. `VALID` if signature is valid and verified by GitHub, otherwise represents reason why signature is considered invalid.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "GitSignatureState",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "GitSignature",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "PullRequestReviewThread",
          "description": "A threaded list of comments for a given pull request.",
          "fields": [
            {
              "name": "comments",
              "description": "A list of pull request comments associated with the thread.",
              "args": [
                {
                  "name": "first",
                  "description": "Returns the first _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": "Returns the elements in the list that come after the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": "Returns the last _n_ elements from the list.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": "Returns the elements in the list that come before the specified global ID.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PullRequestReviewCommentConnection",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "pullRequest",
              "description": "Identifies the pull request associated with this thread.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PullRequest",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "RepositoryInvitation",
          "description": "An invitation for a user to be added to a repository.",
          "fields": [
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "invitee",
              "description": "The user who received the invitation.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "inviter",
              "description": "The user who created the invitation.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "User",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "repository",
              "description": "The Repository the user is invited to.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "RepositoryInvitationRepository",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "RepositoryInvitationRepository",
          "description": "A subset of repository info shared with potential collaborators.",
          "fields": [
            {
              "name": "description",
              "description": "The description of the repository.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "descriptionHTML",
              "description": "The description of the repository rendered to HTML.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "HTML",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "hasIssuesEnabled",
              "description": "Indicates if the repository has issues feature enabled.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "hasWikiEnabled",
              "description": "Indicates if the repository has wiki feature enabled.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "homepageURL",
              "description": "The repository's URL.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "isFork",
              "description": "Identifies if the repository is a fork.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "isLocked",
              "description": "Indicates if the repository has been locked or not.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "isMirror",
              "description": "Identifies if the repository is a mirror.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "isPrivate",
              "description": "Identifies if the repository is private.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "lockReason",
              "description": "The reason the repository has been locked.",
              "args": [],
              "type": {
                "kind": "ENUM",
                "name": "RepositoryLockReason",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "mirrorURL",
              "description": "The repository's original mirror URL.",
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "name",
              "description": "The name of the repository.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "owner",
              "description": "The User owner of the repository.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "RepositoryOwner",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "RepositoryInfo",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "Tag",
          "description": "Represents a Git tag.",
          "fields": [
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "message",
              "description": "The Git tag message",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "name",
              "description": "The Git tag name",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "oid",
              "description": "The Git object ID",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "GitObjectID",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "repository",
              "description": "The Repository the Git object belongs to",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Repository",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "target",
              "description": "The Git object the tag points to",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "GitObject",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            {
              "kind": "INTERFACE",
              "name": "GitObject",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "UnknownSignature",
          "description": "Represents an unknown signature on a Commit or Tag.",
          "fields": [
            {
              "name": "email",
              "description": "Email used to sign this object.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "isValid",
              "description": "True if the signature is valid and verified by GitHub.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "payload",
              "description": "Payload for GPG signing object. Raw ODB object without the signature header.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "signature",
              "description": "ASCII-armored signature header from object.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "signer",
              "description": "GitHub user corresponding to the email signing this commit.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "state",
              "description": "The state of this signature. `VALID` if signature is valid and verified by GitHub, otherwise represents reason why signature is considered invalid.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "GitSignatureState",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            {
              "kind": "INTERFACE",
              "name": "GitSignature",
              "ofType": null
            }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "AddCommentInput",
          "description": "Autogenerated input type of AddComment",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "subjectId",
              "description": "The Node ID of the subject to modify.",
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "body",
              "description": "The contents of the comment.",
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "AddProjectCardInput",
          "description": "Autogenerated input type of AddProjectCard",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "projectColumnId",
              "description": "The Node ID of the ProjectColumn.",
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "contentId",
              "description": "The content of the card. Must be a member of the ProjectCardItem union",
              "type": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "note",
              "description": "The note on the card.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "AddProjectColumnInput",
          "description": "Autogenerated input type of AddProjectColumn",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "projectId",
              "description": "The Node ID of the project.",
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": "The name of the column.",
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "AddReactionInput",
          "description": "Autogenerated input type of AddReaction",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "subjectId",
              "description": "The Node ID of the subject to modify.",
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "content",
              "description": "The name of the emoji to react with.",
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "ReactionContent",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CreateProjectInput",
          "description": "Autogenerated input type of CreateProject",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "ownerId",
              "description": "The owner ID to create the project under.",
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": "The name of project.",
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "body",
              "description": "The description of project.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DeleteProjectInput",
          "description": "Autogenerated input type of DeleteProject",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "projectId",
              "description": "The Project ID to update.",
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DeleteProjectCardInput",
          "description": "Autogenerated input type of DeleteProjectCard",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "cardId",
              "description": "The id of the card to delete.",
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DeleteProjectColumnInput",
          "description": "Autogenerated input type of DeleteProjectColumn",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "columnId",
              "description": "The id of the column to delete.",
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "MoveProjectCardInput",
          "description": "Autogenerated input type of MoveProjectCard",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "cardId",
              "description": "The id of the card to move.",
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "columnId",
              "description": "The id of the column to move it into.",
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "afterCardId",
              "description": "Place the new card after the card with this id. Pass null to place it at the top.",
              "type": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "MoveProjectColumnInput",
          "description": "Autogenerated input type of MoveProjectColumn",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "columnId",
              "description": "The id of the column to move.",
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "afterColumnId",
              "description": "Place the new column after the column with this id. Pass null to place it at the front.",
              "type": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "RemoveReactionInput",
          "description": "Autogenerated input type of RemoveReaction",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "subjectId",
              "description": "The Node ID of the subject to modify.",
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "content",
              "description": "The name of the emoji to react with.",
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "ReactionContent",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateProjectInput",
          "description": "Autogenerated input type of UpdateProject",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "projectId",
              "description": "The Project ID to update.",
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": "The name of project.",
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "body",
              "description": "The description of project.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateProjectCardInput",
          "description": "Autogenerated input type of UpdateProjectCard",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "projectCardId",
              "description": "The ProjectCard ID to update.",
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "note",
              "description": "The note of ProjectCard.",
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateProjectColumnInput",
          "description": "Autogenerated input type of UpdateProjectColumn",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "projectColumnId",
              "description": "The ProjectColumn ID to update.",
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": "The name of project column.",
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateSubscriptionInput",
          "description": "Autogenerated input type of UpdateSubscription",
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": "A unique identifier for the client performing the mutation.",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "subscribableId",
              "description": "The Node ID of the subscribable object to modify.",
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "state",
              "description": "The new state of the subscription.",
              "type": {
                "kind": "NON_NULL",
                "name": "Non-Null",
                "ofType": {
                  "kind": "ENUM",
                  "name": "SubscriptionState",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        }
      ]
    }
  }
};

export schema;
