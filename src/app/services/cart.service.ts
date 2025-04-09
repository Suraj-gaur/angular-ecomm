import { Injectable, signal } from '@angular/core';
import { Products } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Products[]>([]);

  addToCart(product: Products) {
    const existingProduct = this.cart().find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.stock = (existingProduct.stock ?? 0) + 1;
    } else {
      this.cart.update(cart => [...cart, { ...product, stock: 1 }]);
    }
  }

  removeFromCart(productId: number) {
    this.cart.update(cart => cart.filter(item => item.id !== productId));
  }

  constructor() { }
}
