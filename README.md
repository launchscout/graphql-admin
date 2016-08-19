# graphql-admin

This is a spike of dynamically creating a front end for a graphql server using introspection.
So far the following works:

* Listing all queries
* Executing queries that return a list
* Executing queries that return a scalar value
  * with arguments
* Mutations

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.11-webpack.2.

## setup

```
npm install
```

Then, you may want to modify `src/app/app.module.ts` to configure the graphql client to point to your server. Currently it's set to point at `http://localhost:4000`. Your graphql server will need to support
CORS as well for this setup to work.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## GraphQL server

This project has so far only been tested using [our fork](https://github.com/gaslight/absinthe_example) the example [Absinthe](http://absinthe-graphql.org/) project. To try it, clone this 
project and run it. It already supports CORS so it should "Just Work" (TM).
