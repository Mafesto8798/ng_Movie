import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FavoriteMovie, Movie } from './models/movie';
import { Observable } from 'rxjs';
import { secret } from './models/secret';

@Injectable({
  providedIn: 'root',
})
export class FavoriteMovieService {
  favoriteMovies: Movie[] = [];
  TOKEN: string = secret.dbKey;
  constructor(private http: HttpClient) {}

  getFavoriteMovies(): Observable<FavoriteMovie[]> {
    return this.http.get<FavoriteMovie[]>(
      'https://favoritemovies-2cd9.restdb.io/rest/favorites',
      { headers: { 'x-apikey': this.TOKEN } }
    );
  }

  addFavoriteMovie(movie: Movie): Observable<FavoriteMovie> {
    this.favoriteMovies.push(movie);
    return this.http.post<FavoriteMovie>(
      'https://favoritemovies-2cd9.restdb.io/rest/favorites',
      { movieId: movie.id },
      { headers: { 'x-apikey': this.TOKEN } }
    );
  }

  removeFavoriteMovie(id: string): Observable<FavoriteMovie> {
    console.log(id);
    return this.http.delete<FavoriteMovie>(
      `https://favoritemovies-2cd9.restdb.io/rest/favorites/${id}`,
      { headers: { 'x-apikey': this.TOKEN } }
    );
  }
}
