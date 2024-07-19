import {UrlMatchResult, UrlMatcher, UrlSegment} from '@angular/router';

const productsListSegment = 'products-list';
const allProductsSegmentsLength = 1;
const subcategoryProductsSegmentsLength = 2;
const subcategoryProductsSegmentsIndex = 1;

export const productsListMatcher: UrlMatcher = (segments: UrlSegment[]): UrlMatchResult | null => {
    const isProductsListSegment = segments[0].path === productsListSegment;

    if (!isProductsListSegment) {
        return null;
    }

    const isAllProductsSegments = segments.length === allProductsSegmentsLength;
    const isSubcategoryProductsSegments = segments.length === subcategoryProductsSegmentsLength;

    if (!isAllProductsSegments && !isSubcategoryProductsSegments) {
        return null;
    }

    const urlMatchResult: UrlMatchResult = {
        consumed: segments,
    };

    if (isSubcategoryProductsSegments) {
        const subcategorySegment = segments[subcategoryProductsSegmentsIndex];

        urlMatchResult.posParams = {
            subCategoryId: subcategorySegment,
        };
    }

    return urlMatchResult;
};
