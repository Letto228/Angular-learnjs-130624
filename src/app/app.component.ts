import {ChangeDetectionStrategy, Component} from '@angular/core';
import {applicationConfigMock} from './shared/application-config/application-config.mock';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    readonly applicationConfig = applicationConfigMock;

    isSidenavOpenedStore = false;

    onMenuClick(event: Event) {
        // eslint-disable-next-line no-console
        console.log('Menu click', event);

        this.isSidenavOpenedStore = !this.isSidenavOpenedStore;
    }
}
