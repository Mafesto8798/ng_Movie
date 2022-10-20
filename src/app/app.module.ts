import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { Heart, HeartFill, Star, StarFill } from 'ng-bootstrap-icons/icons';
import { FormsModule } from '@angular/forms';
import { FavoritesComponent } from './favorites/favorites.component';

const routes: Routes = [
  { path: 'movies', component: MovieListComponent },
  { path: 'movies/:id', component: MovieDetailsComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
];

const icons = {
  Heart,
  HeartFill,
  Star,
  StarFill,
};

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieComponent,
    MovieDetailsComponent,
    FavoritesComponent,
  ],
  imports: [
    BootstrapIconsModule.pick(icons),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule,
  ],
  exports: [BootstrapIconsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
