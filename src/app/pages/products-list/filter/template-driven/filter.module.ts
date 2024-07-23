import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {FormsModule} from '@angular/forms';
import {FilterComponent} from './filter.component';
import {CounterInputModule} from '../../../../shared/counter-input/counter-input.module';
import {IsStringValidatorModule} from './validators/is-string-validator/is-string-validator.module';
import {IsStringAsyncValidatorModule} from './validators/is-string-async-validator/is-string-async-validator.module';

@NgModule({
    declarations: [FilterComponent],
    imports: [
        CommonModule,
        MatInputModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        CounterInputModule,
        FormsModule,
        IsStringValidatorModule,
        IsStringAsyncValidatorModule,
    ],
    exports: [FilterComponent],
})
export class FilterModule {}
