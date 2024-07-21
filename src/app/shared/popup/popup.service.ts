import {Injectable, TemplateRef} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PopupService<T> {
    private readonly popupTemplate$ = new BehaviorSubject<TemplateRef<T> | null>(null);

    private readonly popupContext$ = new BehaviorSubject<T | undefined>(undefined);

    template$ = this.popupTemplate$.asObservable();
    context$ = this.popupContext$.asObservable();

    openPopup(template: TemplateRef<T> | null, context: T | undefined) {
        this.popupTemplate$.next(template);
        this.popupContext$.next(context);
    }

    closePopup() {
        this.popupTemplate$.next(null);
        this.popupContext$.next(undefined);
    }
}
