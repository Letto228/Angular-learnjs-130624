import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    SimpleChanges,
} from '@angular/core';
import {
    AbstractControl,
    FormArray,
    FormControl,
    FormGroup,
    ValidationErrors,
    Validators,
} from '@angular/forms';
import {Observable, map, timer} from 'rxjs';
import {IProductsFilter} from '../products-filter.interface';
import {isStringValidator} from './validators/is-string.validator';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent implements OnChanges {
    @Input() brands: string[] | null = null;

    @Output() changeFilter = new EventEmitter<IProductsFilter>();

    readonly control = new FormControl(500);

    readonly form = new FormGroup({
        search: new FormControl('', {
            validators: [Validators.required, Validators.minLength(3)],
            asyncValidators: [this.isStringAsyncValidator.bind(this)],
        }),
        brands: new FormArray<FormControl<boolean>>([]),
        priceRange: new FormGroup({
            min: new FormControl(0),
            max: new FormControl(999999),
        }),
    });

    readonly searchErrors$ = this.form
        .get('search')
        ?.statusChanges.pipe(map(() => this.form.get('search')?.value));

    ngOnChanges({brands}: SimpleChanges): void {
        if (brands) {
            this.updateBrandsControl();
        }
    }

    private updateBrandsControl() {
        const brandsForms = this.brands?.length
            ? this.brands.map(() => new FormControl(false))
            : [];

        const formArray = new FormArray(brandsForms as Array<FormControl<boolean>>);

        this.form.setControl('brands', formArray);
    }

    // AsyncValidatorFn
    private isStringAsyncValidator(control: AbstractControl): Observable<ValidationErrors | null> {
        return timer(2000).pipe(map(() => isStringValidator(control)));
    }
}
