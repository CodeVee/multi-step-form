import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button (click)="btnClicked.emit()"
    [ngClass]="{'bg-blue-purplish hover:bg-blue-purplish-light': confirm, 'bg-blue-marine hover:bg-blue-deep': !confirm}"
    class="w-[9.7rem] lg:w-[12.3rem] h-16 lg:h-4.8 text-white font-medium text-sb lg:text-bs rounded-[.4rem] lg:rounded-bs">
      <span *ngIf="confirm; else nextText">Confirm</span>
      <ng-template #nextText>Next Step</ng-template>
    </button>
  `
})
export class ButtonComponent {
  @Input() confirm: boolean | undefined
  @Output() btnClicked = new EventEmitter<void>()
}
