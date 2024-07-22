import {Routes} from '@angular/router';
import {productsListMatcher} from './products-list-url-matcher';
import {ProductsListComponent} from './products-list.component';

export const productsListRouting: Routes = [
    {
        matcher: productsListMatcher,
        component: ProductsListComponent,
    },
];
