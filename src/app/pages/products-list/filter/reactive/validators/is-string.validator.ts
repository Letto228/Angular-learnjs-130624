import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export const isStringValidator: ValidatorFn = ({
    value,
}: AbstractControl): ValidationErrors | null =>
    Number(value) ? {isString: 'Input value is number'} : null;
