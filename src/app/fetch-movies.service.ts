import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './models/movie';
import { Observable } from 'rxjs';
import { MovieResponse } from './models/movie-response';
import { secret } from './models/secret';

@Injectable({
  providedIn: 'root',
})
export class FetchMoviesService {
  TOKEN: string = secret.APIKey;

  constructor(private http: HttpClient) {}
  movies: Movie[] = [];

  fetchMovies(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(
      `https://api.themoviedb.org/4/list/1?api_key=${this.TOKEN}`
    );
  }

  returnMovies(): Movie[] {
    return this.movies;
  }

  fetchMovieById(id: number): Observable<Movie> {
    return this.http.get<Movie>(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${this.TOKEN}`
    );
  }
}
