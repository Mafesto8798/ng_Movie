import { Component, OnInit } from '@angular/core';
import { FavoriteMovieService } from '../favorite-movie.service';
import { FetchMoviesService } from '../fetch-movies.service';
import { FavoriteMovie, Movie } from '../models/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movieList: Movie[] = [];
  filteredMovies: Movie[] = [];
  userInput: string = '';
  sortMethod: string = '';
  sortDateMethod: string = '';
  favorites: FavoriteMovie[] = [];
  constructor(
    private fetchMovie: FetchMoviesService,
    private favoriteService: FavoriteMovieService
  ) {}

  ngOnInit(): void {
    this.fetchMovie.fetchMovies().subscribe((res) => {
      res.results.map((movie) => {
        movie.isFavorite = false;
        this.movieList.push(movie);
        this.filteredMovies.push(movie);
      });
      console.log(this.movieList);
    });
    this.favoriteService.getFavoriteMovies().subscribe((f) => {
      this.favorites = f;
    });
  }

  sortLowest(a: Movie, b: Movie): number {
    if (a.popularity < b.popularity) {
      return -1;
    } else if (a.popularity > b.popularity) {
      return 1;
    } else {
      return 0;
    }
  }

  sortHighest(a: Movie, b: Movie): number {
    if (a.popularity < b.popularity) {
      return 1;
    } else if (a.popularity > b.popularity) {
      return -1;
    } else {
      return 0;
    }
  }

  sortOldest(a: Movie, b: Movie): number {
    if (a.release_date < b.release_date) {
      return -1;
    } else if (a.release_date > b.release_date) {
      return 1;
    } else {
      return 0;
    }
  }

  sortNewest(a: Movie, b: Movie): number {
    if (a.release_date < b.release_date) {
      return 1;
    } else if (a.release_date > b.release_date) {
      return -1;
    } else {
      return 0;
    }
  }

  filterMovie(): void {
    this.filteredMovies = this.movieList.filter((movie) =>
      movie.title.toLowerCase().includes(this.userInput.toLowerCase())
    );
    if (this.sortMethod == 'lowest') {
      this.filteredMovies.sort(this.sortLowest);
    } else if (this.sortMethod == 'highest') {
      this.filteredMovies.sort(this.sortHighest);
    }
    if (this.sortDateMethod == 'oldest') {
      this.filteredMovies.sort(this.sortOldest);
    } else if (this.sortDateMethod == 'newest') {
      this.filteredMovies.sort(this.sortNewest);
    }
    console.log(this.filteredMovies);
  }
}
