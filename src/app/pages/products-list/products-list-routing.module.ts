import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {productsListMatcher} from './products-list-url-matcher';
import {ProductsListComponent} from './products-list.component';

// const routes: Routes = productsListRouting;
const routes: Routes = [
    {
        matcher: productsListMatcher,
        component: ProductsListComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProductsListRoutingModule {}
