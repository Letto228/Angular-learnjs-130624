import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderModule} from './components/header/header.module';
import {ProductsListComponent} from './pages/products-list/products-list.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        ProductsListComponent,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HeaderModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
