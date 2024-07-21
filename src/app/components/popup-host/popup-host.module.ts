import {NgModule} from '@angular/core';
import {AsyncPipe, NgIf, NgTemplateOutlet} from '@angular/common';
import {PopupHostComponent} from './popup-host.component';

@NgModule({
    declarations: [PopupHostComponent],
    exports: [PopupHostComponent],
    imports: [AsyncPipe, NgTemplateOutlet, NgIf],
})
export class PopupHostModule {}
