import { Component, EventEmitter, Output, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../theme.service';
import { MatInputModule } from '@angular/material/input';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatFormFieldModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() toggleSideContentVisibility = new EventEmitter<void>();
  themeService: ThemeService = inject(ThemeService);
  themes!: string[];

  ngOnInit() {
    this.themes = this.themeService.themes;
  }

  toggleSideContent() {
    this.toggleSideContentVisibility.emit();
  }

  onSelect(event: MatSelectChange) {
    this.themeService.setTheme(event.value);
  }
}
