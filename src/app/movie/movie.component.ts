import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FavoriteMovieService } from '../favorite-movie.service';
import { FavoriteMovie, Movie } from '../models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  @Input() movieItem: Movie = {} as Movie;
  @Input() favorites: FavoriteMovie[] = [];
  @Output() remove = new EventEmitter<Movie>();
  constructor(private favoriteService: FavoriteMovieService) {}

  ngOnInit(): void {}

  addToFavorites(): void {
    this.favoriteService.addFavoriteMovie(this.movieItem).subscribe((res) => {
      this.favorites.push(res);
      console.log(res);
    });
  }

  removeFavorite(): void {
    let index: number = this.favorites.findIndex(
      (f) => f.movieId == this.movieItem.id
    );
    this.favoriteService
      .removeFavoriteMovie(this.favorites[index]._id)
      .subscribe((res) => {
        this.favorites.splice(index, 1);
      });
    this.remove.emit(this.movieItem);
  }

  isFavorited(): boolean {
    return (
      this.favorites.findIndex((fav) => fav.movieId == this.movieItem.id) != -1
    );
  }
}
