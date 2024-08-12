import { Injectable, RendererFactory2, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme = '';
  private rendererFactory2 = inject(RendererFactory2);

  public setTheme(theme: string) {
    const rf = this.rendererFactory2.createRenderer(null, null);
    if (this.currentTheme) {
      rf.removeClass(document.body, this.currentTheme);
    }

    rf.addClass(document.body, theme);
    this.currentTheme = theme;
  }
}
