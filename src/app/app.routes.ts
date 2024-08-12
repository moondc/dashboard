import { Routes } from '@angular/router';
import { AboutMeComponent } from './links/about-me/about-me.component';
import { UnauthorizedComponent } from './links/unauthorized/unauthorized.component';
import { HomeComponent } from './links/home/home.component';
import { MarketViewComponent } from './links/market-view/market-view.component';
import { VerdaccioComponent } from './links/verdaccio/verdaccio.component';
import { KibanaComponent } from './links/kibana/kibana.component';
import { AdminComponent } from './links/admin/admin.component';
import { ArchDiagramComponent } from './links/arch-diagram/arch-diagram.component';
import { ThemeColorsComponent } from './links/theme-colors/theme-colors.component';

export const routes: Routes = [
    { path: "arch-diagram", component: ArchDiagramComponent },
    { path: 'verdaccio', component: VerdaccioComponent },
    { path: 'kibana', component: KibanaComponent },
    { path: 'market-view', component: MarketViewComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'about-me', component: AboutMeComponent },
    { path: 'theme-colors', component: ThemeColorsComponent },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: "/home", pathMatch: 'full' },
    { path: '**', component: UnauthorizedComponent },
];
