import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Input,
    Output,
    TemplateRef,
} from '@angular/core';
import {ApplicationConfig} from '../../shared/application-config/application-config.interface';
import {PopupService} from '../../shared/popup/popup.service';

interface IPopupContext {
    $implicit: string;
}

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    @Input() applicationConfig: ApplicationConfig | null = null;
    @Output() readonly menuClick = new EventEmitter<Event>();
    readonly popupService = inject(PopupService<IPopupContext>);
    readonly defaultContext: IPopupContext = {$implicit: 'DEFAULT_TITLE'};

    openPopup(_template: TemplateRef<IPopupContext>, context?: IPopupContext): void {
        this.popupService.openPopup(_template, context);
    }

    closePopup() {
        this.popupService.closePopup();
    }
}
