import {Pipe, PipeTransform} from '@angular/core';
import {Product} from '../products/product.interface';

@Pipe({
    name: 'productsFilter',
})
export class ProductsFilterPipe implements PipeTransform {
    transform(products: Product[] | null, nameFilter: string): Product[] | null {
        return products === null || products.length === 0 || nameFilter === ''
            ? []
            : products.filter(p => p.name.toLowerCase().includes(nameFilter.toLowerCase()));
    }
}
