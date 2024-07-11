import {
    Component,
    EventEmitter,
    HostBinding,
    Input,
    Output,
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

    @Output() closePopup = new EventEmitter<void>();

    @Input() set popupTemplate(template: TemplateRef<unknown> | null) {
        this.viewport?.clear();
        this.hostDisplay = template ? 'block' : 'none';

        if (template) {
            this.viewport?.createEmbeddedView(template);
        }
    }
}
