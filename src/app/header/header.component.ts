import { Component, EventEmitter, Output, ViewEncapsulation, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../theme.service';
import { MatInputModule } from '@angular/material/input';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatFormFieldModule, FormsModule, ReactiveFormsModule],
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() toggleSideContentVisibility = new EventEmitter<void>();
  themeService: ThemeService = inject(ThemeService);
  themes = ['dark-theme', 'light-theme'];
  panelClass!: string;

  ngOnInit() {
    this.themeService.setTheme(this.themes[0]);
  }

  toggleSideContent() {
    this.toggleSideContentVisibility.emit();
  }

  onSelect(event: MatSelectChange) {
    this.themeService.setTheme(event.value);
  }
}
