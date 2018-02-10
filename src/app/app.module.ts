import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }     from './app.component';
import { LoginComponent }   from './login/login.component';
import { HomeComponent }    from './home/home.component';

import { AuthenticationService }  from './shared/services/authentication.service';
import { DashboardComponent }     from './dashboard/dashboard.component';
import { HeroesComponent }        from './heroes/heroes.component';
import { HeroService }            from './heroes/hero.service';
import { HeroDetailComponent }    from './heroes/hero-detail/hero-detail.component';
import { HeroSearchComponent }    from './heroes/hero-search/hero-search.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './shared/services/in-memory-data.service';
import { FiltersComponent } from './filters/filters.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [
    HeroService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
