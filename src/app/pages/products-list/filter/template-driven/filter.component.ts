import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    Output,
    inject,
} from '@angular/core';
import {IProductsFilter} from '../products-filter.interface';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent {
    private readonly changeDetectorRef = inject(ChangeDetectorRef);
    @Input() brands: string[] | null = null;

    @Output() changeFilter = new EventEmitter<IProductsFilter>();

    counter = 500;

    constructor() {
        setTimeout(() => {
            this.counter = 1000;
            this.changeDetectorRef.markForCheck();

            // eslint-disable-next-line no-console
            console.log('this.counter = 1000');
        }, 2000);
    }

    onCounterChange(value: number) {
        // eslint-disable-next-line no-console
        console.log(value);
    }

    onSubmit(value: unknown) {
        // eslint-disable-next-line no-console
        console.log(value);
    }
}
