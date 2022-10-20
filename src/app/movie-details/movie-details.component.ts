import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails } from '../models/movie';
import { MovieDetailService } from '../movie-detail.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  displayMovie: MovieDetails = {} as MovieDetails;
  constructor(
    private route: ActivatedRoute,
    private movieDetail: MovieDetailService
  ) {}

  ngOnInit(): void {
    let id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.movieDetail.fetchMovieDetails(id).subscribe((res) => {
      console.log(res);
      this.displayMovie = res;
    });
  }
}
