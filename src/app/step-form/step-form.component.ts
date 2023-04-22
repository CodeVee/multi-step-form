import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { ButtonComponent } from '../button.component';
import { PersonalStepComponent } from '../personal-step/personal-step.component';
import { PlanStepComponent } from '../plan-step/plan-step.component';
import { AddonStepComponent } from '../addon-step/addon-step.component';
import { SummaryStepComponent } from '../summary-step/summary-step.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StepForm } from '../app.model';
import { TITLES } from '../app.constant';

@Component({
  selector: 'app-step-form',
  standalone: true,
  imports: [
    CommonModule, HeaderComponent,
    ButtonComponent, PersonalStepComponent,
    PlanStepComponent, AddonStepComponent,
    SummaryStepComponent
  ],
  templateUrl: './step-form.component.html'
})
export class StepFormComponent implements OnInit {
  @Input() activeStep: number | undefined
  @Output() stepForwarded = new EventEmitter<void>()
  @Output() stepReversed = new EventEmitter<void>()

  stepForm!: FormGroup<StepForm>

  get stepFormCtrl(){
    return this.stepForm.controls
  }
  get stepFormValues(){
    return this.stepForm.getRawValue()
  }

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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm()
  }

  private initializeForm() {
    this.stepForm = this.fb.nonNullable.group({
      name : ['', Validators.required],
      email : ['', [Validators.required, Validators.email]],
      phone : ['', Validators.required],
      planId : [1, Validators.required],
      annual: [false],
      addons : this.fb.nonNullable.array([false, false, false]),
    })
  }

  nextStep() {
    this.stepForwarded.emit()
  }
  previousStep() {
    this.stepReversed.emit()
  }

  confirm() {
    if (this.stepForm.valid) {
      this.stepForwarded.emit()
    }

  }
}
