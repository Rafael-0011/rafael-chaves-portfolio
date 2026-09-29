import { Routes } from '@angular/router';
import { PortfolioPage } from './portfolio/portfolio-page';

export const routes: Routes = [
	{ path: '', redirectTo: 'backend', pathMatch: 'full' },
	{ path: 'backend', component: PortfolioPage, data: { profile: 'backend' } },
	{ path: 'engenheiro', component: PortfolioPage, data: { profile: 'engenheiro' } },
	{ path: '**', redirectTo: 'backend' },
];
