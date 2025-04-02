import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button class="bg-blue-500 text-white font-bold w-full py-2 px-4 rounded-xl shadow-md hover:opacity-50 " 
    (click)= "btnClicked.emit()"> {{ label() }} </button>
  `,
  styles: ``
})
export class PrimaryButtonComponent {

  label = input('');

  btnClicked = output();

}
