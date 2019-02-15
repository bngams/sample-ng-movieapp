import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  myMovieList: Movie[] = [
    {
      id: 1,
      title: 'Movie1',
      desc: 'Lorem...',
      imgUrl: 'http://via.placeholder.com/320'
    },
    {
      id: 2,
      title: 'Movie2',
      desc: 'Lorem...',
      imgUrl: 'http://via.placeholder.com/320'
    },
    {
      id: 3,
      title: 'Movie3',
      desc: 'Lorem...',
      imgUrl: 'http://via.placeholder.com/320'
    },
  ];
  dynamicMovieList: Movie[];
  // $ => contain an Observable
  dynamicMovieList$: Observable<Movie[]>;

  // Dependency Injection
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.findMoviesWithSubscribe();
    this.findMovies();
  }

  /**
   * dynamic async varibale
   */
  findMovies() {
    this.dynamicMovieList$ = this.movieService.findAll();
  }

  /**
   * Classic syntax with subscribe
   */
  findMoviesWithSubscribe() {
    this.movieService.findAll().subscribe((response) => {
      // code
      this.dynamicMovieList = response;
    });
  }

}
