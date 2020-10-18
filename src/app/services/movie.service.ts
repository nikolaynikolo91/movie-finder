import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Movie from '../models/Movie';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '?api_key=9610ac38b91a5e0da95a43b0854ea590';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  popularEndPoint = '/movie/popular';
  theatersEndpoint = '/discover/movie';

  constructor(private http: HttpClient) {}

  getPopularMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(BASE_URL + this.popularEndPoint + API_KEY);
  }

  getInTheatersMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(BASE_URL + this.theatersEndpoint + API_KEY);
  }
}
