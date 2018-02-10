import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }       	from './home/home.component';
import { LoginComponent }       from './login/login.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './heroes/hero-detail/hero-detail.component';
import { FiltersComponent }  	from './filters/filters.component';

const routes: Routes = [  
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',      component: LoginComponent },
  { path: 'home',       component: HomeComponent },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent },
  { path: 'filters',     component: FiltersComponent },
  
  // otherwise redirect to login
  { path: '**', redirectTo: 'login' }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}