import { Component, OnInit, Input } from '@angular/core';
import { FavoriteMovieService } from '../favorite-movie.service';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  @Input() movieItem: Movie = {} as Movie;
  constructor(private favoriteService: FavoriteMovieService) {}

  ngOnInit(): void {}

  addToFavorites(): void {
    this.favoriteService.addFavoriteMovie(this.movieItem).subscribe((res) => {
      console.log(res);
    });
  }
}
