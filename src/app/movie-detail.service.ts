import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieDetails } from './models/movie';
import { secret } from './models/secret';

@Injectable({
  providedIn: 'root',
})
export class MovieDetailService {
  TOKEN: string = secret.APIKey;

  constructor(private http: HttpClient) {}

  fetchMovieDetails(id: number): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${this.TOKEN}&language=en-US`
    );
  }
}
