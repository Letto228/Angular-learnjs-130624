import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {productsMock} from './products.mock';
import {Product} from './product.interface';

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    private readonly productsMock = productsMock;
    private readonly indexId = new Map<string, Product>();

    constructor() {
        for (const product of this.productsMock) {
            this.indexId.set(product._id, product);
        }
    }

    getAll(): Observable<Product[]> {
        return of(this.productsMock);
    }

    getById(id: string): Product | undefined {
        return this.indexId.get(id);
    }
}
