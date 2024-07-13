import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filterByProperty',
})
export class FilterByPropertyPipe implements PipeTransform {
    // --------------Мой вариант реализации не корректный, но писал сам --------------

    // transform<T>(
    //     value: T,
    //     propertyName: T extends unknown[]
    //         ? T[0] extends Record<string | number | symbol, unknown>
    //             ? keyof T[0]
    //             : undefined
    //         : undefined,
    //     searchPropertyValue: T extends unknown[]
    //         ? T[0] extends Record<string | number | symbol, unknown>
    //             ? T[0][keyof T[0]]
    //             : T[0]
    //         : undefined,
    // ): T | null {

    // -------------- Этот вариант  после того как подсмотрел эталонное решение (в плане типизации)  --------------

    transform<T, P extends keyof T>(
        value: T[] | undefined | null,
        propertyName: P,
        searchPropertyValue: T[P],
    ): T[] | undefined | null {
        if (!value || !value?.length) {
            return value;
        }

        return value.filter(item => {
            const targetValue = item[propertyName];

            if (typeof targetValue === 'string' && typeof searchPropertyValue === 'string') {
                const regexp = new RegExp(`.*${searchPropertyValue}.*`, 'i');

                return regexp.test(targetValue);
            }

            return targetValue === searchPropertyValue;
        });
    }
}
