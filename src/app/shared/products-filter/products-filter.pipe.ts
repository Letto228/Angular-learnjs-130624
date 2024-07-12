import {Pipe, PipeTransform} from '@angular/core';
import {Product} from '../products/product.interface';

@Pipe({
    name: 'productsFilter',
})
export class ProductsFilterPipe implements PipeTransform {
    transform(value: Product[] | null, searchName: string = ''): Product[] | null {
        const regexp = new RegExp(`.*${searchName}.*`, 'i');

        return value ? value.filter(product => regexp.test(product.name)) : null;
    }
}
