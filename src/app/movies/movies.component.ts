import { Component, EventEmitter, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import Movie from '../models/Movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  popularMovies: Array<Movie>;
  inTheaterMovies: Array<Movie>;
  massage: any = null;

  constructor(private moviesService: MovieService) {}

  ngOnInit(): void {
    this.moviesService.getPopularMovies().subscribe((data) => {
      this.popularMovies = data['results'].slice(0, 6);
    });
    this.moviesService.getPopularMovies().subscribe((data) => {
      this.inTheaterMovies = data['results'].slice(6, 12);
    });
  }

  btnIdClick(event): void{
    this.massage = 'id: ' + event;
  }
}
