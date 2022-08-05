import { Injectable } from '@angular/core';
import { ProductItem } from '../models/Product-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  clientName = '';
  price=0
  cart:ProductItem[]=[]
  constructor() { }

  getItemInCart(){
    return this.cart
  }

  addProduct(quantity: number, product: ProductItem) {
    const checkProduct = this.cart.filter((p) => p.id === product.id);

    if (checkProduct.length !== 0) {
      const initialCart = parseInt(
        checkProduct[0]['quantity'] as unknown as string
      );
      const addProd = initialCart + parseInt(quantity as unknown as string);
      checkProduct[0]['quantity'] = addProd;
      this.cart = this.cart
        .filter((p) => p.id !== product.id)
        .concat(checkProduct);

      return this.cart;
    } else {
      const quantityInt = parseInt(quantity as unknown as string);
      product['quantity'] = quantityInt;
      this.cart.push(product);
      return this.cart;
    }
  }

  clearCart():void{
		this.cart = [];
	}
 
}
