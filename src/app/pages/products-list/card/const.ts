import {Product} from '../../../shared/products/product.interface';

export const defaultData: Product = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    _id: 'id-id',
    feedbacksCount: 0,
    subCategory: 'sub category',
    images: [
        {
            url: 'https://placehold.co/600x400/orange/white',
            source: 'a67f341c37067c12bb959fb5bcfd95288e973fe7cef6ef4e262d517cd382620f.jpg',
        },
        {
            url: 'https://placehold.co/600x400/deeppink/blue',
            source: 'a67f341c37067c12bb959fb5bcfd95288e973fe7cef6ef4e262d517cd382620f.jpg',
        },
        {
            url: 'https://placehold.co/600x400/yellow/green',
            source: 'a67f341c37067c12bb959fb5bcfd95288e973fe7cef6ef4e262d517cd382620f.jpg',
        },
    ],
    name: 'Product name',
    price: 0.0,
    rating: 0.0,
};
