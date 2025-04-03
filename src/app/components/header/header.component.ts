import { Component, inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent, RouterLink],
  template: `
  <div class="flex justify-between items-center shadow-md bg-gray-800 text-white p-4">
    <button class="text-xl" routerLink="/"> My Store</button>
    <app-primary-button 
    [label]="'Cart (' + cartService.cart().length +')'" 
    routerLink="/cart"
    />
  </div>
  `,
  styles: ``
})
export class HeaderComponent {

  cartService = inject(CartService);

  showButtonclicked() {
    console.log('Button clicked');
  }

}
