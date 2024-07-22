import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {PopupService} from '../../shared/popup/popup.service';

@Component({
    selector: 'app-popup-host',
    templateUrl: './popup-host.component.html',
    styleUrls: ['./popup-host.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupHostComponent {
    private readonly popupService = inject(PopupService);
    readonly template$ = this.popupService.template$;
    readonly context$ = this.popupService.context$;

    closePopup() {
        this.popupService.closePopup();
    }
}
