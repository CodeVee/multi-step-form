import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextboxComponent } from '../textbox.component';

@Component({
  selector: 'app-personal-step',
  standalone: true,
  imports: [CommonModule, TextboxComponent],
  templateUrl: './personal-step.component.html',
  styles: []
})
export class PersonalStepComponent {

}
