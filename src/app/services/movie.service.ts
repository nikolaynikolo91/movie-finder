import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Movie from '../models/Movie';
import MovieDetails from '../models/MovieDetails';
import { map, tap } from 'rxjs/operators';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '&api_key=9610ac38b91a5e0da95a43b0854ea590';
const API_KEY_ALT = '?api_key=9610ac38b91a5e0da95a43b0854ea590';
const inTheatersEndPoint =
  '/discover/movie?primary_release_date.gte=2019-06-15&primary_release_date.lte=2020-10-22';
const popularEndPoint = '/discover/movie?sort_by=popularity.desc';
const popularKidsEndPoint =
  '/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
const dramaEndPoint =
  '/discover/movie?with_genres=18&primary_release_year=2019';
const bestDrama =
  '/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10';
const singleMovie = '/movie/';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getPopularMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(BASE_URL + popularEndPoint + API_KEY);
  }

  getInTheatersMovies(): Observable<Array<Movie>> {
    return this.http
      .get<Array<Movie>>(BASE_URL + inTheatersEndPoint + API_KEY)
      .pipe(map((e) => e['results'].slice(0, 6)));
  }

  getPopularKidsMovie(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(
      BASE_URL + popularKidsEndPoint + API_KEY
    );
  }

  getDrama(): Observable<Array<Movie>> {
    return this.http
      .get<Array<Movie>>(BASE_URL + dramaEndPoint + API_KEY)
      .pipe(map((e) => e['results'].slice(0, 6)));
  }

  getBestDrama(): Observable<Movie[]> {
    return this.http
      .get<Movie[]>(BASE_URL + bestDrama + API_KEY)
      .pipe(map((e) => e['results'].slice(1, 7)));
  }

  getMovie(id: string): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(
      BASE_URL + singleMovie + id + API_KEY_ALT
    );
  }

  searchMovie(query: string): Observable<Movie[]> {
    return this.http
      .get<Movie[]>(
        BASE_URL + '/search/movie' + API_KEY_ALT + `&query=${query}`
      )
      .pipe(map((e) => e['results']));
  }
}
