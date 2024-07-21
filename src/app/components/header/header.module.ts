import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {HeaderComponent} from './header.component';
import {PopupHostModule} from '../popup-host/popup-host.module';

@NgModule({
    declarations: [HeaderComponent],
    imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, PopupHostModule],
    exports: [HeaderComponent],
})
export class HeaderModule {}
