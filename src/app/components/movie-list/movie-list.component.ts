import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';

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

  constructor() { }

  ngOnInit() {
  }

}
