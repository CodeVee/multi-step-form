import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button (click)="btnClicked.emit()" class="w-[12.3rem] h-[4.8rem] bg-blue-marine text-white
    font-medium text-[1.6rem] rounded-bs">
      Next Step
    </button>
  `,
  styles: []
})
export class ButtonComponent {
  @Output() btnClicked = new EventEmitter<void>()
}
