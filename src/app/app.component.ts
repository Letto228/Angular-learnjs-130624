import {AfterViewChecked, AfterViewInit, Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit, AfterViewChecked {
    counter = 0;

    // constructor() {
    //     setInterval(() => {
    //         this.counter += 1;
    //     }, 1000);
    // }

    ngAfterViewInit(): void {
        // eslint-disable-next-line no-console
        console.log('ngAfterViewInit AppComponent');
    }

    ngAfterViewChecked(): void {
        // eslint-disable-next-line no-console
        console.log('ngAfterViewChecked AppComponent');
    }
}
