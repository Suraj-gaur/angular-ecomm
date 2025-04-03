import { Injectable, signal } from '@angular/core';
import { Products } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Products[]>([{
    id: 1,
    title: 'Product 1',
    price: 100,
    image: 'https://via.placeholder.com/150',
    stock: 10
  },
  {
    id: 2,
    title: 'Product 2',
    price: 200,
    image: 'https://via.placeholder.com/150',
    stock: 5
  }]);

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
