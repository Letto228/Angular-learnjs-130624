import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    inject,
    Output,
} from '@angular/core';

@Component({
    selector: 'app-filter-panel',
    templateUrl: './filter-panel.component.html',
    styleUrls: ['./filter-panel.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterPanelComponent {
    @Output() readonly changeNameFilter = new EventEmitter<string>();
    @Output() readonly changeValueFilter = new EventEmitter<string | number>();
    @Output() readonly changeValueFilterCategory = new EventEmitter<string>();
    changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    nameFilter = '';
    filters: string[] = ['name', 'price', 'subCategory', 'feedbacksCount', 'rating'];
    valueFilter: string | number = '';
    valueCategoryFilter = '';

    clearNameFilter() {
        this.nameFilter = '';
        this.changeNameFilter.emit('');
    }

    filterByNameChanged(value: string) {
        this.changeNameFilter.emit(value);
        this.changeDetectorRef.markForCheck();
    }

    filterByValueChanged(value: string | number) {
        this.changeValueFilter.emit(value);
        this.changeDetectorRef.detectChanges();
    }

    clearValueFilter() {
        this.valueFilter = '';
        this.changeValueFilter.emit('');
        this.changeDetectorRef.markForCheck();
    }

    clearCategoryValueFilter() {
        this.valueCategoryFilter = '';
        this.clearValueFilter();
        this.changeDetectorRef.markForCheck();
    }

    filterByValueCategoryChanged(value: string) {
        this.clearNameFilter();
        this.clearValueFilter();
        this.changeValueFilterCategory.emit(value);
        this.changeDetectorRef.markForCheck();
    }
}
