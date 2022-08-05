import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-order-confirmation-page',
  templateUrl: './order-confirmation-page.component.html',
  styleUrls: ['./order-confirmation-page.component.css']
})
export class OrderConfirmationPageComponent implements OnInit {


  constructor(private route: ActivatedRoute,private cartservice:CartService) { }
  firstName: string | null = '';
  totalPrice: number | null = 0;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.firstName = params.get('firstName');
      this.totalPrice = Number(params.get('totalPrice'));
    })
  }
  onclick(){
  this.cartservice.clearCart()
  }
}
