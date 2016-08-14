import {Component} from '@angular/core';
@Component({
    template: `
    Hi
    `
})
export default class QueryListComponent {
  @Input() queryName : String;
  
}
