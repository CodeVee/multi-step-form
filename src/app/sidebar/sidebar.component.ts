import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarLinkComponent } from '../sidebar-link/sidebar-link.component';
import { LINKS } from '../app.constant';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, SidebarLinkComponent],
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  links = LINKS
  @Input() activeStep: number | undefined
}
