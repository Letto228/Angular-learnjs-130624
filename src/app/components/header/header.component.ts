import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges,
} from '@angular/core';
import {ApplicationConfig} from '../../shared/application-config/application-config.interface';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnChanges, OnInit {
    @Input() applicationConfig: ApplicationConfig | null = null;

    // @Output() readonly menuClick = new EventEmitter<void>();
    @Output() readonly menuClick = new EventEmitter<Event>();
    // @Output() readonly menuClick = interval(1000).pipe(map(() => new Event('type')));

    // readonly title = 'Angular-learnjs-130624';
    // readonly logoPath = '../../../favicon.ico';

    ngOnChanges({applicationConfig}: SimpleChanges): void {
        if (applicationConfig) {
            // eslint-disable-next-line no-console
            console.log(
                'applicationConfig changed',
                applicationConfig.currentValue === this.applicationConfig,
            );
        }
    }

    ngOnInit(): void {
        // eslint-disable-next-line no-console
        console.log('OnInit');
    }
}
