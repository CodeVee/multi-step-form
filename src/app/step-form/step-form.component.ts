import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step-form.component.html',
  styles: []
})
export class StepFormComponent {
  @Input() activeStep: number | undefined
}
