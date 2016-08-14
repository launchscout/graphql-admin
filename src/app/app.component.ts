import { Component } from '@angular/core';
import { Angular2Apollo } from 'angular2-apollo';
import gql from 'graphql-tag';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works very well!';
  apolloClient: Angular2Apollo;

  constructor(apolloClient: Angular2Apollo) {
    this.apolloClient = apolloClient;
    this.apolloClient.watchQuery({
      query: gql`
      query getPosts {
        posts {
        	title
      	}
      }`,
      forceFetch: true
    }).subscribe((results) => {
      this.posts = results.data.posts;
    });
  }
}
