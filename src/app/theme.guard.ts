import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { ThemeService } from './theme.service';

export const themeGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  const themeService = inject(ThemeService);
  themeService.setTooltip(route);
  return true;
};
