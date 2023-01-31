import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { ButtonComponent } from '../button.component';
import { PersonalStepComponent } from '../personal-step/personal-step.component';
import { PlanStepComponent } from '../plan-step/plan-step.component';
import { AddonStepComponent } from '../addon-step/addon-step.component';

@Component({
  selector: 'app-step-form',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ButtonComponent, PersonalStepComponent, PlanStepComponent, AddonStepComponent],
  templateUrl: './step-form.component.html',
  styles: []
})
export class StepFormComponent {
  @Input() activeStep: number | undefined
  @Output() stepForwarded = new EventEmitter<void>()
  @Output() stepReversed = new EventEmitter<void>()

  get currentTitle() {
    return TITLES.find(t => t.step === this.activeStep)
  }

  get personalStep() {
    return this.activeStep === 1
  }
  get planStep() {
    return this.activeStep === 2
  }
  get addonStep() {
    return this.activeStep === 3
  }
  get summaryStep() {
    return this.activeStep === 4
  }

  get beyondInfoStep() {
    return this.activeStep && this.activeStep > 1
  }

  nextStep() {
    this.stepForwarded.emit()
  }
  previousStep() {
    this.stepReversed.emit()
  }

  confirm() {

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
