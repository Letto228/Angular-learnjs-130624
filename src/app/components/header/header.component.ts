import {
    AfterViewChecked,
    AfterViewInit,
    Component,
    DoCheck,
    OnDestroy,
    OnInit,
} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent
    implements OnInit, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy
{
    readonly title = 'Angular-learnjs-130624';
    readonly logoPath = '../../../favicon.ico';

    constructor() {
        // eslint-disable-next-line no-console
        console.log('constructor HeaderComponent');
    }

    getTitle(): string {
        // eslint-disable-next-line no-console
        console.log('Recalculate view HeaderComponent');

        return this.title;
    }

    ngOnInit(): void {
        // eslint-disable-next-line no-console
        console.log('ngOnInit HeaderComponent');
    }

    ngDoCheck(): void {
        // eslint-disable-next-line no-console
        console.log('ngDoCheck HeaderComponent');
    }

    ngAfterViewInit(): void {
        // eslint-disable-next-line no-console
        console.log('ngAfterViewInit HeaderComponent');
    }

    ngAfterViewChecked(): void {
        // eslint-disable-next-line no-console
        console.log('ngAfterViewChecked HeaderComponent');
    }

    ngOnDestroy(): void {
        // eslint-disable-next-line no-console
        console.log('ngOnDestroy HeaderComponent');
    }
}
