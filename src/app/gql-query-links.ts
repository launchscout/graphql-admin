import { Component, Input } from '@angular/core';

@Component({
  selector: 'gql-query-links',
  templateUrl: 'gql-query-links.html'
})
export default class QueryLinks {
  @Input() queryFields: Array<any>;

}
