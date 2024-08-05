import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MainContentComponent } from './main-content/main-content.component';
import { HeaderComponent } from './header/header.component';
import { NgClass } from '@angular/common';
import { ThemeService } from './theme.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideNavComponent, MainContentComponent, HeaderComponent, MatSidenavModule, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dashboard';
  theme!: string;
  themeService: ThemeService = inject(ThemeService);

  ngOnInit(): void {
    this.themeService.theme.subscribe(next => this.theme = next);
  }
}
