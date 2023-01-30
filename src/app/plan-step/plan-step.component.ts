import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanRadioComponent } from './plan-radio.component';
import { PlanToggleComponent } from './plan-toggle.component';

@Component({
  selector: 'app-plan-step',
  standalone: true,
  imports: [CommonModule, PlanRadioComponent, PlanToggleComponent],
  templateUrl: './plan-step.component.html',
  styles: []
})
export class PlanStepComponent {
  monthPlans = [...BASEPLANS]
  yearPlans = BASEPLANS.map(plan => {
    const yearPlan = { ...plan}
    yearPlan.amount *= 10
    return yearPlan
  })

  selectedPlan = 'arcade'
  annualPlan = false

  selectPlan(plan: string) {
    this.selectedPlan = plan
  }

  changeBilling() {
    this.annualPlan = !this.annualPlan
  }
}

interface Plan {
  name: string
  amount: number
  imgUrl: string
}

const BASEPLANS: Plan[] = [
  { name: 'arcade', amount: 9, imgUrl: 'assets/images/icon-arcade.svg' },
  { name: 'advanced', amount: 12, imgUrl: 'assets/images/icon-advanced.svg' },
  { name: 'pro', amount: 15, imgUrl: 'assets/images/icon-pro.svg' }
]
