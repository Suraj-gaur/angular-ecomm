import { Component, inject, input } from '@angular/core';
import { Products } from '../../../models/products.model';
import { ButtonComponent } from "../../../components/button/button.component";
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  imports: [ButtonComponent],
  template: `
  <div class=" bg-white shadow-md border rounded-xl flex items-center gap-4 p-6 border-b">
      <img [src]="item().image" alt="Product Image" class="w-24 h-24 object-cover rounded-lg">
      <div class="flex flex-col gap-2">
          <span class="text-md font-bold">{{ item().title }}</span>
          <span class="text-gray-500 text-sm">Price: {{ "$" + item().price }}</span>
      </div>
      <div class="flex-1">
          <app-button label="Remove" (btnClicked)="cartService.removeFromCart(item().id)" />
      </div>
  </div>
  `,
  styles: ``
})
export class CartItemComponent {

  cartService = inject(CartService);
  item = input.required<Products>();


}
