import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextboxComponent } from '../textbox.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-personal-step',
  standalone: true,
  imports: [CommonModule, TextboxComponent],
  templateUrl: './personal-step.component.html'
})
export class PersonalStepComponent {
  @Input() nameCtrl!: FormControl<string>
  @Input() emailCtrl!: FormControl<string>
  @Input() phoneCtrl!: FormControl<string>
}
