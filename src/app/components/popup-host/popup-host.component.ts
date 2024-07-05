import {Component, Input, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
    selector: 'app-popup-host',
    templateUrl: './popup-host.component.html',
    styleUrls: ['./popup-host.component.css'],
})
export class PopupHostComponent {
    @ViewChild('viewport', {static: true, read: ViewContainerRef})
    viewport: ViewContainerRef | undefined;

    hidden = true;

    @Input() set template(template: TemplateRef<unknown> | null) {
        if (template) {
            this.viewport?.clear();
            this.viewport?.createEmbeddedView(template);
            this.hidden = false;
        } else {
            this.hidden = true;
        }
    }
}
