import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepForm, StepFormBase, Summary } from '../app.model';
import { MonthAddons, MonthPlans, YearAddons, YearPlans } from '../app.constant';

@Component({
  selector: 'app-summary-step',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary-step.component.html'
})
export class SummaryStepComponent implements OnInit {

  @Input() stepForm!: StepFormBase
  plan: Summary = { name: '', amount: 0 }
  annual = false
  addons: Summary[] = []
  total = 0

  ngOnInit(): void {
    this.annual = this.stepForm.annual

    const plans = this.annual ? YearPlans : MonthPlans
    const selectedPlan = plans.find(p => p.id == this.stepForm.planId)!
    this.plan = { name: selectedPlan.name, amount: selectedPlan.amount }

    const addons = this.annual ? YearAddons : MonthAddons
    this.addons = this.stepForm.addons.reduce((agg, selected, i)=> {
      if (selected) {
        agg.push(i + 1)
      }
      return agg
    },[] as number[])
    .map(id => {
      const addon = addons.find(a => a.id == id)!
      return { name: addon.header, amount: addon.amount } as Summary
    })

    this.total = this.addons.reduce((sum, a) => sum += a.amount, 0) + this.plan.amount;
  }
}
