import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { AddonCheckboxComponent } from './addon-checkbox.component';

@Component({
  selector: 'app-addon-step',
  standalone: true,
  imports: [CommonModule, AddonCheckboxComponent],
  templateUrl: './addon-step.component.html',
  styles: []
})
export class AddonStepComponent {
  addons = new BehaviorSubject(MonthAddons)

  selectedAddons: string[] = []

  addonSelected(addon: string) {
    return this.selectedAddons.includes(addon)
  }

  updatedAddons(addon: string) {
    const addonSelected = this.addonSelected(addon)
    if (addonSelected) {
      this.selectedAddons = this.selectedAddons.filter(a => a !== addon)
    } else {
      this.selectedAddons.push(addon)
    }
  }


}

interface Addon {
  header: string
  amount: number
  sub: string
}

const BASEADDONS: Addon[] = [
  { header: 'Online service', amount: 1, sub: 'Access to multiplayer games' },
  { header: 'Larger storage', amount: 2, sub: 'Extra 1TB of cloud save' },
  { header: 'Customizable profile', amount: 2, sub: 'Custom theme on your profile' }
]

const MonthAddons = [...BASEADDONS]
const YearAddons = BASEADDONS.map(addon => {
    const yearAddon = { ...addon}
    yearAddon.amount *= 10
    return yearAddon
  })
