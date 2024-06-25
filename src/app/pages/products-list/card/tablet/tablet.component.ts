import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { productsMock } from '../../../../shared/products/products.mock';

@Component( {
  selector    : 'app-tablet',
  standalone  : true,
  imports     : [ CommonModule ],
  templateUrl : './tablet.component.html',
  styleUrls   : [ './tablet.component.css' ]
} )
export class TabletComponent {
  readonly product = productsMock[ 0 ];
  readonly discount = ( this.product.price * 0.1 );
  readonly discountPrice = this.product.price - this.discount;

  onAddBtnClick( event : { stopPropagation : () => void; } ) {
    event.stopPropagation();
    console.log( event );
  }
}
