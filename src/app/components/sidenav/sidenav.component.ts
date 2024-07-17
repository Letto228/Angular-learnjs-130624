import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ViewChild,
    inject,
} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
    @ViewChild(MatDrawer, {static: true})
    private readonly drawer: MatDrawer | undefined;

    @ViewChild('filterPanel')
    private readonly filterPanelDrawer: MatDrawer | undefined;

    private readonly changeDetectorRef = inject(ChangeDetectorRef);

    toggleSidenavOpened() {
        this.drawer?.toggle();
        this.changeDetectorRef.markForCheck();
    }

    toggleFilterPanel() {
        this.filterPanelDrawer?.toggle();
        this.changeDetectorRef.markForCheck();
    }
}
