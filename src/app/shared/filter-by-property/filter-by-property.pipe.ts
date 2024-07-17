import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filterByProperty',
})
export class FilterByPropertyPipe implements PipeTransform {
    transform<I, K extends keyof I>(items: I[] | null, key: K, searchValue: I[K]): I[] {
        if (items === null) {
            return [];
        }

        if (searchValue === '') {
            return items;
        }

        return items.filter(item => {
            if (typeof item === 'string') {
                return item.toLowerCase().includes(String(searchValue).toLowerCase());
            }

            return String(item[key]).toLowerCase() === String(searchValue).toLowerCase();
        });
    }
}
