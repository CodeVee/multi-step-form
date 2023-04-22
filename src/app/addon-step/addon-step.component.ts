import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { AddonCheckboxComponent } from './addon-checkbox.component';
import { MonthAddons, YearAddons } from '../app.constant';
import { FormArray, FormControl } from '@angular/forms';
import { Addon } from '../app.model';

@Component({
  selector: 'app-addon-step',
  standalone: true,
  imports: [CommonModule, AddonCheckboxComponent],
  templateUrl: './addon-step.component.html'
})
export class AddonStepComponent implements OnInit {
  @Input() addonsCtrl!: FormArray<FormControl<boolean>>
  @Input() annualCtrl!: FormControl<boolean>
  addons!: BehaviorSubject<Addon[]>

  ngOnInit(): void {
    this.addons = new BehaviorSubject(this.annualCtrl.value ? YearAddons : MonthAddons)
  }

  addonSelected(addon: number) {
    return this.addonsCtrl.value[addon - 1]
  }

  updatedAddons(addon: number) {
    const addonList = [...this.addonsCtrl.value]
    addonList[addon - 1] = !addonList[addon - 1]

    this.addonsCtrl.setValue(addonList)
  }
}

