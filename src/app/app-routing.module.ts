import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsListComponent} from './pages/products-list/products-list.component';
import {ProductComponent} from './pages/product/product.component';
import {ProductsListModule} from './pages/products-list/products-list.module';
import {ProductModule} from './pages/product/product.module';
import {DescriptionComponent} from './pages/product/description/description.component';
import {TypeComponent} from './pages/product/type/type.component';
import {DescriptionModule} from './pages/product/description/description.module';
import {TypeModule} from './pages/product/type/type.module';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {NotFoundModule} from './pages/not-found/not-found.module';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/products-list',
        pathMatch: 'full',
    },
    // Реализация без выделения родительского сегмента
    // -----------------------------------------------
    // {
    //     path: 'products-list',
    //     component: ProductsListComponent,
    // },
    // {
    //     path: 'products-list/:subCategoryId',
    //     component: ProductsListComponent,
    // },
    //
    // Реализация с выделением родительского сегмента для уменьшения копипасты
    // -----------------------------------------------------------------------
    {
        path: 'products-list',
        children: [
            {
                path: '',
                component: ProductsListComponent,
            },
            {
                path: ':subCategoryId',
                component: ProductsListComponent,
            },
        ],
    },
    {
        path: 'product/:id',
        component: ProductComponent,
        children: [
            {
                path: 'description',
                component: DescriptionComponent,
            },
            {
                path: 'type',
                component: TypeComponent,
            },
            {
                path: '**',
                redirectTo: 'description',
                pathMatch: 'full',
            },
        ],
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        ProductsListModule,
        ProductModule,
        DescriptionModule,
        TypeModule,
        NotFoundModule,
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
