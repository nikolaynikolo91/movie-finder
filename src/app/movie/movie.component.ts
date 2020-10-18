import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Movie from '../models/Movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  path = 'https://image.tmdb.org/t/p/w500';

  @Input()
  movie: Movie;
  imageSrc: string;
  @Output()
  idBtnEmitter: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.imageSrc = this.path + this.movie.poster_path;
  }

  btnIsClick(): void {
    this.idBtnEmitter.emit(this.movie.id);
  }
}
