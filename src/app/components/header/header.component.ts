import { Component, signal } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  template: `
  <div class="flex justify-between items-center shadow-md bg-gray-800 text-white p-4">
    <span class="text-xl" > My Store</span>
    <app-primary-button label="Cart" (btnClicked)="showButtonclicked()" ></app-primary-button>
  </div>
  `,
  styles: ``
})
export class HeaderComponent {

  tittle = signal('Angular Ecomm');

  showButtonclicked() {
    console.log('Button clicked');
  }

}
