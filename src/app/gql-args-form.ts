import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'gql-args-form',
  templateUrl: 'gql-args-form.html'
})
export default class GqlArgsForm {
  @Input() args: Array<Object>;
  @Output() onExecute: EventEmitter = new EventEmitter();

  execute(argsForm) {
    this.onExecute.emit(argsForm);
  }
}
