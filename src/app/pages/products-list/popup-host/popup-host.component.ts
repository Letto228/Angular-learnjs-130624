import {
    Component,
    HostBinding,
    Input,
    TemplateRef,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';

@Component({
    selector: 'app-popup-host',
    templateUrl: './popup-host.component.html',
    styleUrls: ['./popup-host.component.css'],
})
export class PopupHostComponent {
    @ViewChild('viewport', {read: ViewContainerRef, static: true})
    private readonly viewport: ViewContainerRef | undefined;

    @HostBinding('style.display')
    hostDisplay = 'none';

    @Input() set popupTemplate(template: TemplateRef<unknown> | null) {
        this.viewport?.clear();

        if (template) {
            this.hostDisplay = 'block';
            this.viewport?.createEmbeddedView(template);
        } else {
            this.hostDisplay = 'none';
        }
    }

    closePopup() {
        this.popupTemplate = null;
    }

    clickHandler(event: MouseEvent) {
        event.stopPropagation();
        const target = event.target as HTMLElement;

        if (target.id === 'app-popup-host-overlay' || target.id === 'app-popup-host-close-button') {
            this.closePopup();
        }
    }
}
