import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import MovieDetails from '../models/MovieDetails';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movie: MovieDetails;
  movieId: string;
  imageSrc: string;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {
    this.movieId = route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.movieService.getMovie(this.movieId).subscribe((e) => {
      this.movie = e;
      this.imageSrc = 'http://image.tmdb.org/t/p/w500' + e.poster_path;
    });
  }
}
