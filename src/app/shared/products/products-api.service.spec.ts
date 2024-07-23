import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {delay} from 'rxjs';
import {ProductsApiService} from './products-api.service';
import {productsMock} from './products.mock';
import {ProductsDto} from './products.dto';

describe('ProductsApiService', () => {
    let service: ProductsApiService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ProductsApiService],
            imports: [HttpClientTestingModule],
        });
    });

    beforeEach(() => {
        service = TestBed.inject(ProductsApiService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    it('should be created', done => {
        service
            .getProducts$()
            .pipe(delay(100))
            .subscribe(products => {
                expect(products).toEqual(productsMock);

                done();
            });

        httpMock.expectOne('/products').flush({data: {items: productsMock}} satisfies ProductsDto);
    });
});
