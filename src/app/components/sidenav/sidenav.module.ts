import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {SidenavComponent} from './sidenav.component';
import {ProductsListModule} from '../../pages/products-list/products-list.module';
import {CardMiniComponent} from '../../pages/products-list/card-mini/card-mini.component';

@NgModule({
    declarations: [SidenavComponent, CardMiniComponent],
    imports: [CommonModule, MatSidenavModule, MatButtonModule, ProductsListModule, MatIconModule],
    exports: [SidenavComponent],
})
export class SidenavModule {}
