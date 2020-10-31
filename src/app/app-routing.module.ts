import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { LandingComponent } from './landing/landing.component';

const appRouts: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'movies' },
  {path: 'movies', component: LandingComponent},
  { path: 'movies/:id', component: MovieDetailsComponent },
  {path: 'about', component: AboutComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRouts)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
