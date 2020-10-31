import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Movie from '../models/Movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  movieSearch$: Observable<Movie[]>;
  searchMovie: Movie[];
  constructor(private movieService: MovieService,) {}

  ngOnInit(): void {}

  search(value): void {
    // console.log(value.Search);
    this.movieSearch$ = this.movieService.searchMovie(value.Search);
    this.movieSearch$.subscribe((data) => {
      this.searchMovie = data;
      console.log(data);
    });
  }
}
