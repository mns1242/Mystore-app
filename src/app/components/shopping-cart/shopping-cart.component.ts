import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductItem } from 'src/app/models/Product-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  products: ProductItem[]=[]
  firstName = '';
  clientAddress = '';
  clientCreditCardNumber = '';
  totalPrice:number =0
  form = false
  
 

  constructor( private cartService: CartService, private router:Router) { }

  ngOnInit(): void {
    this.products = this.cartService.getItemInCart()
    this.GrandTotal()
  }

  
  showform(){
    if(this.totalPrice >0){
      this.form = true
    }
  }
  GrandTotal(){
   let total = 0
    for(let product of this.products){
      total=  total+(product.quantity * product.price);
    }
    this.totalPrice=total
    
    return  this.totalPrice;
  }
  plus(product:ProductItem){
    
    if(product.quantity < 8){
      product.quantity++
    }
  }
  minus(product:ProductItem){
    
    if(product.quantity > 1){
      product.quantity--
    }
  }

  delete(pId:any){
    this.products.forEach((item:any,index:any)=>{
      if(item.id == pId){
        this.products.splice(index,1);
      }
    })

  }

  SuccessForm(firstName: string): void{
    this.cartService.clearCart();
    this.router.navigateByUrl(`success/${firstName}/${this.totalPrice}`);
  }
  

  sumitForm(): void{ 
    this.firstName =''
    this.clientCreditCardNumber =''
    this.clientAddress=''
  }

  

}
