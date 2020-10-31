import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import Movie from '../models/Movie';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  popularMovies: Array<Movie>;
  inTheaterMovies: Array<Movie>;
  kidsFavoritesMovies: Array<Movie>;
  dramaMovies: Observable<Movie[]>;
  bestDramaMovies$: Observable<Movie[]>;

  constructor(private moviesService: MovieService) {}

  ngOnInit(): void {
    this.moviesService.getPopularMovies().subscribe((data) => {
      this.popularMovies = data['results'].slice(0, 6);
    });
    this.moviesService.getInTheatersMovies().subscribe((data) => {
      this.inTheaterMovies = data;
    });
    this.moviesService
      .getPopularKidsMovie()
      .subscribe(
        (data) => (this.kidsFavoritesMovies = data['results'].slice(0, 6))
      );
    this.dramaMovies = this.moviesService.getDrama();
    this.bestDramaMovies$ = this.moviesService.getBestDrama();
  }

  btnIdClick(event): void {
    console.log(event);
  }
}
