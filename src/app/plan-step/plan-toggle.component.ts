import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plan-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button [ngClass]="{'justify-end': active}" (click)="toggled.emit()" class="flex bg-blue-marine h-8 w-16 px-[.4rem] rounded-2xl">
      <span class="w-[1.2rem] h-[1.2rem] rounded-full bg-white self-center"></span>
    </button>
  `
})
export class PlanToggleComponent {

  @Input() active: boolean | undefined
  @Output() toggled = new EventEmitter<void>()
}
