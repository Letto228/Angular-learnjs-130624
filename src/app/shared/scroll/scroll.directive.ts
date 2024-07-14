import {Directive, EventEmitter, HostListener, Output} from '@angular/core';
import {LoadDirection} from './scroll.interface';

@Directive({
    selector: '[appScroll]',
})
export class ScrollDirective {
    private readonly borderOffset: number = 100;
    private lastScroll = 0;

    @Output() readonly loadData = new EventEmitter<LoadDirection>();

    @HostListener('scroll', ['$event.target'])
    onScroll({scrollTop, scrollHeight, clientHeight}: HTMLElement) {
        if (
            scrollTop + clientHeight >= scrollHeight - this.borderOffset &&
            this.lastScroll < scrollTop
        ) {
            this.loadData.emit(LoadDirection.scrollBottom);
        }

        if (scrollTop + clientHeight <= this.borderOffset && this.lastScroll > scrollTop) {
            this.loadData.emit(LoadDirection.scrollTop);
        }

        this.lastScroll = scrollTop;
    }
}
