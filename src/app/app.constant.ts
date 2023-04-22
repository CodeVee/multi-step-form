import { Addon, Link, Plan, Title } from "./app.model"

const YearMultiple = 10



const BASEPLANS: Plan[] = [
  { id: 1, name: 'arcade', amount: 9, imgUrl: 'assets/images/icon-arcade.svg' },
  { id: 2, name: 'advanced', amount: 12, imgUrl: 'assets/images/icon-advanced.svg' },
  { id: 3, name: 'pro', amount: 15, imgUrl: 'assets/images/icon-pro.svg' }
]
export const MonthPlans = [...BASEPLANS]
export const YearPlans = BASEPLANS.map(plan => {
  const yearPlan = { ...plan}
  yearPlan.amount *= YearMultiple
  return yearPlan
})

const BASEADDONS: Addon[] = [
  { id: 1, header: 'Online service', amount: 1, sub: 'Access to multiplayer games' },
  { id: 2, header: 'Larger storage', amount: 2, sub: 'Extra 1TB of cloud save' },
  { id: 3, header: 'Customizable profile', amount: 2, sub: 'Custom theme on your profile' }
]

export const MonthAddons = [...BASEADDONS]
export const YearAddons = BASEADDONS.map(addon => {
  const yearAddon = { ...addon}
  yearAddon.amount *= YearMultiple
  return yearAddon
})

export const LINKS: Link[] = [
  { step: 1, stage: 'your info'},
  { step: 2, stage: 'select plan'},
  { step: 3, stage: 'add-ons'},
  { step: 4, stage: 'summary'},
]

export const TITLES: Title[] = [
  { step: 1, header: 'Personal info', subHeader: 'Please provide your name, email address, and phone number.' },
  { step: 2, header: 'Select your plan', subHeader: 'You have the option of monthly or yearly billing.' },
  { step: 3, header: 'Pick add-ons', subHeader: 'Add-ons help enhance your gaming experience.' },
  { step: 4, header: 'Finishing up', subHeader: 'Double-check everything looks OK before confirming.' }
]
