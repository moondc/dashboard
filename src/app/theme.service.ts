import { Injectable, RendererFactory2, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private rendererFactory2 = inject(RendererFactory2);

  public displayTooltip$ = new BehaviorSubject<boolean>(false);
  public currentTheme$ = new BehaviorSubject<string>(localStorage.getItem('theme') || "dark-theme");

  constructor() {
    this.setTheme(this.currentTheme$.value);
  }

  public setTheme(theme: string) {
    const renderer = this.rendererFactory2.createRenderer(null, null);
    renderer.removeClass(document.body, this.currentTheme$.value);
    renderer.addClass(document.body, theme);
    this.currentTheme$.next(theme);
    localStorage.setItem('theme', theme);
  }

  public updateTooltipVisibility(route: any): void {
    this.displayTooltip$.next(this.shouldDisplayTooltip(route.routeConfig.path))
  }

  private shouldDisplayTooltip(route: string): boolean {
    const tooltipRoutes = new Set(['kibana', 'verdaccio']);
    return tooltipRoutes.has(route);
  }
}
