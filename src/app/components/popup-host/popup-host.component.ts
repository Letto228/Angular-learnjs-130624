import {Component, Input, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
    selector: 'app-popup-host',
    templateUrl: './popup-host.component.html',
    styleUrls: ['./popup-host.component.css'],
})
export class PopupHostComponent {
    @ViewChild('viewport', {read: ViewContainerRef, static: true})
    private readonly viewport: ViewContainerRef | undefined;

    @Input() set template(templateRef: TemplateRef<unknown> | null) {
        this.viewport?.clear();

        if (templateRef) {
            this.viewport?.createEmbeddedView(templateRef);
        }
    }

    get isOpen(): boolean {
        return !this.viewport?.length;
    }
}
