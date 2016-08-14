import {Component} from '@angular/core';
@Component({
  selector: "form-test",
  template: `
    The Form
<form #theForm="ngForm">
  <input name="foo" ngModel />
</form>
{{ theForm.value | json }}
  `
})
export default class FormTestComponent {
}
