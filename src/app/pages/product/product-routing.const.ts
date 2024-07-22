import {Routes} from '@angular/router';
import {ProductComponent} from './product.component';
import {DescriptionComponent} from './description/description.component';
import {TypeComponent} from './type/type.component';

export const productRouting: Routes = [
    {
        path: '',
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
];
