import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-step-form',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './step-form.component.html',
  styles: []
})
export class StepFormComponent {
  @Input() activeStep: number | undefined

  get currentTitle() {
    return TITLES.find(t => t.step === this.activeStep)
  }
}


interface Title {
  step: number
  header: string
  subHeader: string
}

const TITLES: Title[] = [
  { step: 1, header: 'Personal info', subHeader: 'Please provide your name, email address, and phone number.' },
  { step: 2, header: 'Select your plan', subHeader: 'You have the option of monthly or yearly billing.' },
  { step: 3, header: 'Pick add-ons', subHeader: 'Add-ons help enhance your gaming experience.' },
  { step: 4, header: 'Finishing up', subHeader: 'Double-check everything looks OK before confirming.' }
]
