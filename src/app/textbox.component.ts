import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-textbox',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="flex flex-col gap-0.8">
      <div class="flex justify-between">
        <label class="font-normal text-sb leading-6 text-blue-marine" [for]="label">{{ label }}</label>
        <span *ngIf="hasError" class="font-bold text-sb text-red-strawberry">This field is required</span>
      </div>

      <input
      [id]="label"
      type="text"
      [formControl]="ctrl"
      [placeholder]="placeholder"
      [ngClass]="{'border-red-strawberry': hasError, 'border-gray-light': !hasError}"
      class="w-full h-4.8 rounded-bs px-1.6 caret-blue-marine bg-transparent border focus:border-blue-purplish focus-visible:outline-none text-blue-marine font-medium placeholder:text-gray-cool text-bs leading-10 cursor-pointer">
    </div>
  `
})
export class TextboxComponent {

  @Input() label: string | undefined
  @Input() placeholder: string | undefined
  @Input() ctrl!: FormControl
  get hasError() {
    return this.ctrl?.dirty && this.ctrl?.invalid
  }
}
