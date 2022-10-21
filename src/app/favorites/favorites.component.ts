import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FavoriteMovieService } from '../favorite-movie.service';
import { FetchMoviesService } from '../fetch-movies.service';
import { FavoriteMovie, Movie } from '../models/movie';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  favoriteMovies: Movie[] = [];
  favorites: FavoriteMovie[] = [];

  constructor(
    private favoriteMovie: FavoriteMovieService,
    private movieService: FetchMoviesService
  ) {}

  ngOnInit(): void {
    this.favoriteMovie.getFavoriteMovies().subscribe((res) => {
      this.favorites = res;
      console.log(this.favorites);
      this.favorites.forEach((fav) => {
        this.movieService.fetchMovieById(fav.movieId).subscribe((result) => {
          this.favoriteMovies.push(result);
          console.log(this.favoriteMovies);
        });
      });
    });
  }

  remove(movie: Movie): void {
    let index: number = this.favoriteMovies.findIndex(
      (mov) => mov.id == movie.id
    );
    this.favoriteMovies.splice(index, 1);
  }
}
