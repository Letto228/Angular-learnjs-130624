import {
    Directive,
    ElementRef,
    EventEmitter,
    HostListener,
    inject,
    Input,
    Output,
} from '@angular/core';
import {LoadDirection} from '../load-direction.enum';

@Directive({
    selector: '[appScrollWithLoading]',
})
export class ScrollWithLoadingDirective {
    private readonly htmlElement: ElementRef = inject(ElementRef);
    private prevPositionY = 0;

    @Input()
    borderOffset = 100;

    @Output()
    loadData = new EventEmitter<LoadDirection>();

    @HostListener('scrollend')
    onScroll() {
        const scrollHeight = this.htmlElement.nativeElement.scrollHeight;
        const scrollTop = this.htmlElement.nativeElement.scrollTop;
        const clientHeight = this.htmlElement.nativeElement.clientHeight;

        const scrollDirection = this.getDirection(scrollTop);

        if (
            scrollDirection === LoadDirection.DOWN &&
            scrollHeight - clientHeight - scrollTop < this.borderOffset
        ) {
            this.loadData.emit(LoadDirection.DOWN);
        } else if (scrollDirection === LoadDirection.UP && scrollTop < this.borderOffset) {
            this.loadData.emit(LoadDirection.UP);
        }

        this.prevPositionY = scrollTop;
    }

    getDirection(positionY: number) {
        if (positionY > this.prevPositionY) {
            return LoadDirection.DOWN;
        }

        return LoadDirection.UP;
    }
}
