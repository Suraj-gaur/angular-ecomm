import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItemComponent } from "./cart-item/cart-item.component";
import { OrderSummaryComponent } from "./order-summary/order-summary.component";

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent, OrderSummaryComponent],
  template: `
    <div class="p-6 flex flex-col gap-4">
      <h1 class="text-3xl font-bold">Cart</h1>
      @for (item of cartService.cart(); track item.id) {
        <app-cart-item [item]="item" />
      }
      <app-order-summary />
    </div>
  `,
  styles: ``
})
export class CartComponent {

  cartService = inject(CartService);

}
