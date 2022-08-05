import { Component, OnInit } from '@angular/core';
import { ProductItem } from 'src/app/models/Product-item';
import { ProductsService } from 'src/app/services/products.service';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:ProductItem[]=[]
  public selected: number = 1;
  constructor( private ProductServise:ProductsService,private router:Router, private cartService: CartService) { }

  ngOnInit(): void {
    this.ProductServise.getdata().subscribe(data =>{
      this.products = data
    })
  }

  getitem(product:any){
    this.router.navigate(['/details',product.id])
    console.log(product)
  }
  onSubmit(product:ProductItem){
    console.log(`this is Qyt ${product.quantity}`)
  }


  public addItem(product: ProductItem) {
    this.cartService.addProduct(product.quantity, product);

    alert(`Item Added!`);
  }

}
