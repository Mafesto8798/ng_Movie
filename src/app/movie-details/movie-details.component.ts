import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FavoriteMovieService } from '../favorite-movie.service';
import { FavoriteMovie, Movie, MovieDetails } from '../models/movie';
import { MovieDetailService } from '../movie-detail.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  displayMovie: MovieDetails = {} as MovieDetails;
  favorites: FavoriteMovie[] = [];
  constructor(
    private route: ActivatedRoute,
    private movieDetail: MovieDetailService,
    private favoriteMovies: FavoriteMovieService
  ) {}

  ngOnInit(): void {
    let id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.movieDetail.fetchMovieDetails(id).subscribe((res) => {
      console.log(res);
      this.displayMovie = res;
    });
    this.favoriteMovies.getFavoriteMovies().subscribe((res) => {
      this.favorites = res;
    });
  }

  removeFavorite(): void {
    let index: number = this.favorites.findIndex(
      (fav) => fav.movieId == this.displayMovie.id
    );
    this.favoriteMovies
      .removeFavoriteMovie(this.favorites[index]._id)
      .subscribe((res) => {
        this.favorites.splice(index, 1);
      });
  }

  addToFavorites(): void {
    let dummyMovie: Movie = {} as Movie;
    dummyMovie.id = this.displayMovie.id;
    this.favoriteMovies.addFavoriteMovie(dummyMovie).subscribe((res) => {
      this.favorites.push(res);
      console.log(this.favorites);
    });
  }

  isFavorited(): boolean {
    return (
      this.favorites.findIndex((fav) => fav.movieId == this.displayMovie.id) !=
      -1
    );
  }
}
