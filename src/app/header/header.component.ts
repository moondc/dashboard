import { Component, EventEmitter, Output, ViewEncapsulation, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../theme.service';
import { MatInputModule } from '@angular/material/input';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, MatTooltipModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  themeService: ThemeService = inject(ThemeService);

  @Output() toggleSideContentVisibility = new EventEmitter<void>();
  themes = ['dark-theme', 'light-theme'];
  panelClass!: string;
  tooltip = "Theme settings cannot be applied because this page is using an iframe for the content"
  showTooltip = false;

  ngOnInit() {
    this.themeService.displayTooltip$.subscribe(res => { this.showTooltip = res });
  }

  openCloseSideContent() {
    this.toggleSideContentVisibility.emit();
  }

  onSelect(event: MatSelectChange) {
    this.themeService.setTheme(event.value);
  }
}
