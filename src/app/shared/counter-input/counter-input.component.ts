import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, inject} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
    selector: 'app-counter-input',
    templateUrl: './counter-input.component.html',
    styleUrls: ['./counter-input.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            // eslint-disable-next-line no-use-before-define
            useExisting: CounterInputComponent,
            multi: true,
        },
    ],
})
export class CounterInputComponent implements ControlValueAccessor {
    private readonly changeDetectorRef = inject(ChangeDetectorRef);

    @Input() step = 1;

    counter = 0;
    isDisabled = false;

    onChange: (newCounter: number) => void = () => {
        throw new Error('OnChange функция не установлена');
    };

    onTouched: () => void = () => {
        throw new Error('OnTouched функция не установлена');
    };

    writeValue(newCounter: number): void {
        this.counter = newCounter;

        // eslint-disable-next-line no-console
        console.log('writeValue', newCounter);

        this.changeDetectorRef.markForCheck();
    }

    registerOnChange(emitValueCb: (newCounter: number) => void): void {
        this.onChange = emitValueCb;
    }

    registerOnTouched(markAsTouchedCb: () => void): void {
        this.onTouched = markAsTouchedCb;
    }

    setDisabledState(isDisabled: boolean): void {
        this.isDisabled = isDisabled;

        this.changeDetectorRef.markForCheck();
    }

    back() {
        this.counter -= this.step;

        this.onTouched();
        this.onChange(this.counter);
    }

    next() {
        this.counter += this.step;

        this.onTouched();
        this.onChange(this.counter);
    }
}
