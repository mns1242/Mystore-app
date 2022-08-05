import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap } from '@angular/router';
import { ProductItem } from 'src/app/models/Product-item';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public ProductID: string |unknown = '';
  public product: ProductItem = {} as ProductItem;

  constructor(private router:ActivatedRoute , private productService:ProductsService, private cartService: CartService) { }

  ngOnInit(): void {

    this.router.paramMap.subscribe((params: ParamMap) => {
      this.ProductID = params.get('id');

      this.productService.getdata().subscribe((data) => {

        let Product: ProductItem[] = data
        let selectedID = Product.find(Products => Products.id == this.ProductID)
        if (selectedID) {
          this.product = selectedID
        }


      })

    })
  }

  addItem(product: ProductItem) {
    this.cartService.addProduct(product.quantity, product);

    alert(`Item Added!`);
  }

}
