import { Routes, RouterModule } from '@angular/router';
import HomeComponent from './home';
import QueryComponent from './query';
import FormTestComponent from './formTest';
import GqlMutationComponent from './gql-mutation';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'formtest', component: FormTestComponent },
  { path: 'query/:queryName', component: QueryComponent }
  { path: 'mutation/:mutationName', component: GqlMutationComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
