import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges,
} from '@angular/core';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent implements OnChanges, OnInit {
    @Input() isSidenavOpened = false;

    @Output() readonly isSidenavOpenedChange = new EventEmitter<boolean>();

    counter = 0;

    constructor(private readonly changeDetectorRef: ChangeDetectorRef) {
        // this.changeDetectorRef.detach();
        // setTimeout(() => {
        //     this.changeDetectorRef.reattach();
        // }, 5000);
        // setInterval(() => {
        //     this.counter += 1;
        //     this.changeDetectorRef.markForCheck();
        // }, 1000);
        // setInterval(() => {
        //     this.counter += 1;
        //     this.changeDetectorRef.detectChanges();
        // }, 1000);
    }

    ngOnInit(): void {
        this.changeDetectorRef.detectChanges();
    }

    ngOnChanges({isSidenavOpened}: SimpleChanges): void {
        if (isSidenavOpened) {
            // this.changeDetectorRef.detectChanges();
        }
    }

    toggleSidenavOpened() {
        // this.isSidenavOpened = !this.isSidenavOpened;

        this.isSidenavOpenedChange.emit(!this.isSidenavOpened);
    }
}
