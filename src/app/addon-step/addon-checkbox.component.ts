import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addon-checkbox',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [ngClass]="{'border-blue-purplish bg-alabaster': checked, 'border-gray-light hover:border-blue-purplish bg-white': !checked}"
      (click)="selected.emit()"
      class="flex items-center py-[1.2rem] lg:py-0 gap-1.6 lg:gap-2.4 px-1.6 lg:px-2.4 lg:h-32 border rounded-bs w-full">
      <input type="checkbox" [checked]="checked" class=" rounded-lg checked:text-blue-purplish
      focus:ring-offset-0 focus:ring-transparent border border-gray-light cursor-pointer bg-white h-8 w-8">
      <div class="flex flex-col flex-1 lg:gap-0.8 text-left">
        <h4 class="capitalize font-medium text-sb lg:text-bs leading-6 lg:leading-7 text-blue-marine">{{ header }}</h4>
        <h5 class="font-normal text-[1.2rem] lg:text-sb leading-8 lg:leading-6 text-gray-cool">{{ sub }}</h5>
      </div>
      <h6 class="font-normal text-[1.2rem] lg:text-sb leading-8 lg:leading-6 text-blue-purplish">+{{ '$' + amount }}/mo</h6>
    </button>
  `,
  styles: []
})
export class AddonCheckboxComponent {

  @Input() header: string | undefined
  @Input() sub: string | undefined
  @Input() amount: number | undefined
  @Input() checked: boolean | undefined
  @Output() selected = new EventEmitter<void>()
}
