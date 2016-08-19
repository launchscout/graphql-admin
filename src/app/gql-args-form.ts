import { Component, EventEmitter, Input, Output } from '@angular/core';
import template from './gql-args-form.html';

@Component({
  selector: 'gql-args-form',
  template
})
export default class GqlArgsForm {
  @Input() args: Array<Object>;
  @Output() onExecute: EventEmitter = new EventEmitter();

  execute(argsForm) {
    this.onExecute.emit(argsForm);
  }
}
