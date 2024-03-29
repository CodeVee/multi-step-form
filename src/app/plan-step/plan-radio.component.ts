import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plan-radio',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      (click)="selected.emit(planId)"
      [ngClass]="{'border-blue-purplish bg-alabaster': active,
        'border-gray-light hover:border-blue-purplish bg-white': !active,
        'lg:h-64': !annual, 'lg:h-[18.3rem]': annual
      }"
      class="w-full border rounded-bs pl-1.6 pt-[1.4rem] pb-[1.8rem] gap-[1.4rem] lg:gap-0
      lg:pb-1.6 lg:pt-8 flex lg:flex-col lg:justify-between">
      <img class="self-start" [src]="planImg" [alt]="planName">
      <div class="flex flex-col gap-0.8 text-left">
        <h4 class="capitalize font-medium text-bs leading-7 text-blue-marine">{{ planName }}</h4>
        <span class="font-normal text-sb leading-6 text-gray-cool">{{ '$' + planAmount }}/mo</span>
        <span *ngIf="annual" class="text-blue-marine font-normal text-xl">2 months free</span>
      </div>
    </button>
  `
})
export class PlanRadioComponent {

  @Input() active: boolean | undefined
  @Input() annual: boolean | undefined
  @Input() planId: number | undefined
  @Input() planName: string | undefined
  @Input() planImg: string | undefined
  @Input() planAmount: number | undefined
  @Output() selected = new EventEmitter<number>()
}
