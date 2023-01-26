import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarLinkComponent } from '../sidebar-link/sidebar-link.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, SidebarLinkComponent],
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent {
  links = LINKS
  @Input() activeStep: number | undefined
}

interface Link {
  step: number
  stage: string
}

const LINKS: Link[] = [
  { step: 1, stage: 'your info'},
  { step: 2, stage: 'select plan'},
  { step: 3, stage: 'add-ons'},
  { step: 4, stage: 'summary'},
]
