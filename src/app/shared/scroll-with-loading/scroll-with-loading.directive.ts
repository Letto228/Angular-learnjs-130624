import {Directive, EventEmitter, HostListener, Input, Output} from '@angular/core';

export enum LoadDirection {
    none = 'none',
    top = 'top',
    bottom = 'bottom',
}

@Directive({
    selector: '[appScrollWithLoading]',
})
export class ScrollWithLoadingDirective {
    private oldScrollTop = 0;
    private oldLoadDirection = LoadDirection.none;

    @Input() loadDataBorderOffset = 100;

    @Output() loadData = new EventEmitter<LoadDirection>();

    @HostListener('scroll', ['$event.target'])
    onScroll({scrollTop, clientHeight, scrollHeight}: HTMLElement) {
        const scrollBottom = scrollTop + clientHeight;
        const scrollDif = scrollTop - this.oldScrollTop;
        const triggerTop = this.loadDataBorderOffset;
        const triggerBottom = scrollHeight - this.loadDataBorderOffset;

        this.oldScrollTop = scrollTop;

        if (!scrollDif) {
            return;
        }

        let newLoadDirection = LoadDirection.none;

        if (scrollDif < 0 && scrollTop <= triggerTop) {
            newLoadDirection = LoadDirection.top;
        }

        if (scrollDif > 0 && scrollBottom >= triggerBottom) {
            newLoadDirection = LoadDirection.bottom;
        }

        if (newLoadDirection !== this.oldLoadDirection) {
            this.oldLoadDirection = newLoadDirection;
            this.loadData.emit(newLoadDirection);
        }
    }
}
