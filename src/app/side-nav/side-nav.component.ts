import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, RouterLink, RouterLinkActive],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {

  @Output() toggleSideContentVisibility = new EventEmitter<void>();

  toggleSideContent() {
    this.toggleSideContentVisibility.emit();
  }

  onClick(event: MouseEvent) {
    this.toggleSideContent();
  }

}
