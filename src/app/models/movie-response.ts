export interface MovieResponse {
  average_rating: number;
  backdrop_path: string;
  comments: { [key: string]: null | string };
  created_by: CreatedBy;
  description: string;
  id: number;
  iso_3166_1: string;
  iso_639_1: ISO639_1;
  name: string;
  object_ids: { [key: string]: null | string };
  page: number;
  poster_path: string;
  public: boolean;
  results: Movie[];
  revenue: number;
  runtime: number;
  sort_by: string;
  total_pages: number;
  total_results: number;
}

export interface CreatedBy {
  gravatar_hash: string;
  id: string;
  name: string;
  username: string;
}

export enum ISO639_1 {
  En = 'en',
}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: MediaType;
  original_language: ISO639_1;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  isFavorite: boolean;
}

export enum MediaType {
  Movie = 'movie',
}
