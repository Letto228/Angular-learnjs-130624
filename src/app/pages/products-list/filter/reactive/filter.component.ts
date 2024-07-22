import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    SimpleChanges,
} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {IProductsFilter} from '../products-filter.interface';

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

    form = new FormGroup({
        search: new FormControl(''),
        brands: new FormArray<FormControl<boolean>>([]),
        priceRange: new FormGroup({
            min: new FormControl(0),
            max: new FormControl(999999),
        }),
    });

    constructor() {
        setTimeout(() => {
            this.control.setValue(1000);
            // eslint-disable-next-line no-console
            console.log('setValue(1000)');
        }, 2000);

        // this.control.value
        // this.control.valueChanges.pipe().subscribe(console.log);
        // eslint-disable-next-line no-console
        this.form.valueChanges.subscribe(console.log);
    }

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
}
