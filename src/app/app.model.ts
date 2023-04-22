import { FormArray, FormControl } from "@angular/forms"

export interface Plan {
  id: number
  name: string
  amount: number
  imgUrl: string
}

export interface Addon {
  id: number
  header: string
  amount: number
  sub: string
}

export interface StepForm {
  name: FormControl<string>
  email: FormControl<string>
  phone: FormControl<string>
  planId: FormControl<number>
  annual: FormControl<boolean>
  addons: FormArray<FormControl<boolean>>
}
export interface StepFormBase {
  name: string
  email: string
  phone: string
  planId: number
  annual: boolean
  addons: boolean[]
}

export enum FormStep {
  Personal,
  Plan,
  Addon,
  Summary,
  Complete
}

export interface Summary {
  name: string
  amount: number
}

export interface Link {
  step: number
  stage: string
}

export interface Title {
  step: number
  header: string
  subHeader: string
}
