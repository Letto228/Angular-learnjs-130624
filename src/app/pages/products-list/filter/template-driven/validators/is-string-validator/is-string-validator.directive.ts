import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
    selector: '[appIsStringValidator]',
    providers: [
        {
            provide: NG_VALIDATORS,
            // eslint-disable-next-line no-use-before-define
            useExisting: IsStringValidatorDirective,
            multi: true,
        },
    ],
})
export class IsStringValidatorDirective implements Validator {
    validate({value}: AbstractControl): ValidationErrors | null {
        return Number(value) ? {isString: 'Input value is number'} : null;
    }
}
