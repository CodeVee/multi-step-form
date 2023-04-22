import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanRadioComponent } from './plan-radio.component';
import { PlanToggleComponent } from './plan-toggle.component';
import { BehaviorSubject } from 'rxjs';
import { MonthPlans, YearPlans } from '../app.constant';
import { FormControl } from '@angular/forms';
import { Plan } from '../app.model';

@Component({
  selector: 'app-plan-step',
  standalone: true,
  imports: [CommonModule, PlanRadioComponent, PlanToggleComponent],
  templateUrl: './plan-step.component.html'
})
export class PlanStepComponent implements OnInit {

  @Input() planIdCtrl!: FormControl<number>
  @Input() annualCtrl!: FormControl<boolean>
  plans!: BehaviorSubject<Plan[]>

  ngOnInit(): void {
    this.plans = new BehaviorSubject(this.annualCtrl.value ? YearPlans : MonthPlans)
  }

  selectPlan(planId: number) {
    this.planIdCtrl.setValue(planId)
  }

  changeBilling() {
    this.annualCtrl.setValue(!this.annualCtrl.value)

    const displayPlans = this.annualCtrl.value ? YearPlans : MonthPlans
    this.plans.next(displayPlans)
  }
}
