import {NgModule} from '@angular/core';
import {ProductsListComponent} from './products-list.component';
import {CardModule} from './card/card.module';
import { TabletComponent } from './card/tablet/tablet.component';

@NgModule({
    declarations: [ProductsListComponent],
    imports : [ CardModule, TabletComponent ],
    exports: [ProductsListComponent],
})
export class ProductsListModule {}
