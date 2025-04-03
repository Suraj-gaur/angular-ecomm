import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
 <button class=" text-black py-2 px-4 rounded-xl shadow-md hover:opacity-50" 
  (click)= "btnClicked.emit()"> 
    {{ label() }} 
  </button>
  `,
  styles: ``
})
export class ButtonComponent {
  label = input('');
  btnClicked = output();
}
