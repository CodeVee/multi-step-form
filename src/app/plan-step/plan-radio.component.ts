import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plan-radio',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
    (click)="selected.emit(planName)"
    [ngClass]="{'border-blue-purplish bg-alabaster': active, 'border-gray-light hover:border-blue-purplish bg-white': !active}"
    class="h-64 w-full border rounded-bs pl-1.6 pb-1.6 pt-8 flex flex-col justify-between">
      <img [src]="planImg" [alt]="planName">
      <div class="flex flex-col gap-0.8 text-left">
        <h4 class="capitalize font-medium text-bs leading-7 text-blue-marine">{{ planName }}</h4>
        <span class="font-normal text-sb leading-6 text-gray-cool">$ {{ planAmount }}/mo</span>
      </div>
    </button>
  `,
  styles: []
})
export class PlanRadioComponent {

  @Input() active: boolean | undefined
  @Input() planName: string | undefined
  @Input() planImg: string | undefined
  @Input() planAmount: number | undefined
  @Output() selected = new EventEmitter<string>()
}
