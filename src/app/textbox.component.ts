import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-textbox',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-col gap-[0.8rem]">
      <label class="font-normal text-sb leading-6 text-blue-marine" [for]="label">{{ label }}</label>
      <input
      [id]="label"
      type="text"
      [placeholder]="placeholder"
      class="w-full h-4.8 rounded-bs px-1.6 bg-transparent border border-gray-light focus:ring-offset-0 focus:ring-transparent text-blue-marine font-medium placeholder:text-gray-cool text-bs leading-10 cursor-pointer">
    </div>
  `,
  styles: []
})
export class TextboxComponent {

  @Input() label: string | undefined
  @Input() placeholder: string | undefined
}
