import { Injectable, RendererFactory2, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme = '';
  private rendererFactory2 = inject(RendererFactory2);

  public displayTooltip$ = new BehaviorSubject<boolean>(false);

  public setTheme(theme: string) {
    const rf = this.rendererFactory2.createRenderer(null, null);
    if (this.currentTheme) {
      rf.removeClass(document.body, this.currentTheme);
    }

    rf.addClass(document.body, theme);
    this.currentTheme = theme;
  }

  public setTooltip(route: any): void {
    this.displayTooltip$.next(this.shouldDisplayTooltip(route.routeConfig.path))
  }

  private shouldDisplayTooltip(route: string): boolean {
    switch (route) {
      case "kibana":
      case "verdaccio":
        return true;
    }
    return false;
  }
}
