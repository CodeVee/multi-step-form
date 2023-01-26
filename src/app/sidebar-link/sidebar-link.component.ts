import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar-link',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar-link.component.html',
  styles: []
})
export class SidebarLinkComponent {
  @Input() active: boolean | undefined
  @Input() step: number | undefined
  @Input() stage: string | undefined
}
