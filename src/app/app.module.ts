import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesComponent } from './movies/movies.component';
import { MovieService } from './services/movie.service';
import { MovieComponent } from './movie/movie.component';
import { FooterComponent } from './footer/footer.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    MoviesComponent,
    MovieComponent,
    FooterComponent,
    MovieDetailsComponent,
    AboutComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [MovieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
