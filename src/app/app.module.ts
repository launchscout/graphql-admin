import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import AppComponent from './app';
import { routing, appRoutingProviders } from './routes';
import SchemaService from './schema_service';
import QueryLinks from './gql-query-links';

import {
  defaultApolloClient,
  APOLLO_PROVIDERS
} from 'angular2-apollo';

import ApolloClient, {
  createNetworkInterface
} from 'apollo-client';

const token = 'a78feb423a5933a1c05cdf489d60c236d0435819';
let networkInterface = createNetworkInterface('https://api.github.com/graphql');
const client = new ApolloClient({
  // networkInterface: createNetworkInterface('http://localhost:53441/')
  networkInterface
  // networkInterface: createNetworkInterface('http://localhost:4000/graphql')
  // networkInterface: createNetworkInterface('https://www.graphqlhub.com/graphql')
});

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};  // Create the header object if needed.
    }
    req.options.headers.authorization = `bearer ${token}`;
    next();
  }
}]);

@NgModule({
  declarations: [
    AppComponent,
    QueryLinks
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    routing
  ],
  providers: [
    APOLLO_PROVIDERS,
    defaultApolloClient(client),
    SchemaService
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
