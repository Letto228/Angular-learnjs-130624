import {ChangeDetectorRef, Directive, inject} from '@angular/core';
import {
    AbstractControl,
    AsyncValidator,
    NG_ASYNC_VALIDATORS,
    ValidationErrors,
} from '@angular/forms';
import {Observable, map, tap, timer} from 'rxjs';

@Directive({
    selector: '[appIsStringAsyncValidator]',
    providers: [
        {
            provide: NG_ASYNC_VALIDATORS,
            // eslint-disable-next-line no-use-before-define
            useExisting: IsStringAsyncValidatorDirective,
            multi: true,
        },
    ],
})
export class IsStringAsyncValidatorDirective implements AsyncValidator {
    private readonly changeDetectorRef = inject(ChangeDetectorRef);

    validate({value}: AbstractControl): Observable<ValidationErrors | null> {
        return timer(2000).pipe(
            map(() => (Number(value) ? {isString: 'Input value is number'} : null)),
            tap(() => {
                // eslint-disable-next-line no-console
                console.log('this.changeDetectorRef.markForCheck();');
                this.changeDetectorRef.markForCheck();
            }),
        );
    }
}
