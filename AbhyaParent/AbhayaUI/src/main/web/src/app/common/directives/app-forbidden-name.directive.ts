import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appAppForbiddenName]',
  providers:[{provide: NG_VALIDATORS, useExisting: AppForbiddenNameDirective, multi: true}]
})
export class AppForbiddenNameDirective {

  @Input('appForbiddenName') forbiddenName: string;

  validate(control: AbstractControl): {[key: string]: any} {
    if (control.value === this.forbiddenName) {
      return {'forbiddenName': {value: control.value}};
    } 

    return null;
  }

}


export function createForbiddenNameValidator(forbiddenName) {
  return function validateCounterRange(c: any) {
    let err = {
      forbiddenName: {
        value: c.value
      }
    };

    return (c.value === forbiddenName) ? err: null;
  }
}
