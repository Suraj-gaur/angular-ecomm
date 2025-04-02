import { Component, input } from '@angular/core';
import { Products } from '../../../models/products.model';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent],
  template: `
    <div class="bg-white shadow-md rounded-lg p-6 flex flex-col gap-6 relative">
      <div class="mx-auto">
        <img [src]="product().image" alt="Product Image" class="w-[200px] h-[100px] object-contain rounded-lg">
        
        <div class="flex flex-col mt-2">
          <span class="text-md font-bold text-gray-800">{{ product().title }}</span>
          <span class="text-sm text-gray-800">{{ '$' + product().price }}</span>
          <app-primary-button label="Add to Cart" class="mt-3"/>
        </div>

        <span class="absolute top-2 right-3 text-white text-xs px-2 py-1 rounded"
         [class]="product().stock ? 'bg-green-500' : 'bg-red-500'">
          @if (product().stock) {
            {{ product().stock }} in stock
          } @else {
            Out of Stock
          }
        </span>
      </div>
    </div>`,
  styles: ``
})
export class ProductCardComponent {

  product = input.required<Products>()
}
