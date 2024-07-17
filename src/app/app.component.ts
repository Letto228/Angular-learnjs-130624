import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {applicationConfigMock} from './shared/application-config/application-config.mock';
import {ProductsListComponent} from './pages/products-list/products-list.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    @ViewChild('productList')
    readonly productList: ProductsListComponent | undefined;

    readonly applicationConfig = applicationConfigMock;

    changeProductsListNameFilterValue(name: string) {
        this.productList?.changeNameFilter(name);
    }

    changeProductsListFilterValue(value: any) {
        this.productList?.changeValueFilter(value);
    }

    changeProductsListFilterCategoryValue(categoryName: string) {
        this.productList?.changeValueFilterCategory(categoryName);
    }
}
