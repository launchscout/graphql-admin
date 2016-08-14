import {bootstrap}    from '@angular/platform-browser-dynamic';
import AppComponent from './app';
import {appRouterProviders} from './routes';
import {disableDeprecatedForms, provideForms} from '@angular/forms';

import {
  defaultApolloClient,
  APOLLO_PROVIDERS
} from 'angular2-apollo';

import ApolloClient, {
  createNetworkInterface
} from 'apollo-client';
import SchemaService from './schema_service';

const client = new ApolloClient({
  networkInterface: createNetworkInterface('http://localhost:4000/graphql')
});

bootstrap(AppComponent, [
  appRouterProviders,
  disableDeprecatedForms(),
  provideForms(),
  APOLLO_PROVIDERS,
  SchemaService,
  defaultApolloClient(client)
  ]);
