import { Component, signal } from '@angular/core';
import { Products } from '../../models/products.model';
import { ProductCardComponent } from "./product-card/product-card.component";

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  template: `
    <div class="p-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        @for (product of products(); track product.id) {
          <app-product-card [product]= "product"/>
        }
    </div>
  `,
  styles: ``
})
export class ProductsListComponent {

  products = signal<Products[]>([
    {
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
    },
    {
      id: 3,
      title: 'Product 3',
      price: 300,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 4,
      title: 'Product 4',
      price: 400,
      image: 'https://via.placeholder.com/150',
      stock: 0
    },
    {
      id: 5,
      title: 'Product 5',
      price: 500,
      image: 'https://via.placeholder.com/150',
      stock: 20
    }
  ])
}
