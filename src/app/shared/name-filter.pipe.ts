import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'nameFilter',
})
export class NameFilterPipe implements PipeTransform {
    transform(value: string, ...args: string[]): string {
        return `Hello ${value} ${args[0]}`;
    }
}
