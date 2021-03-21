import { Component, OnInit } from '@angular/core';
import { DataServices } from '../services/data.services';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchTitle;
  movieList = [];

  constructor(private dataService : DataServices) { }

  searchMovie(title) {
    this.dataService
      .findMovieByTitle(title)
      .then((result) => (this.movieList = result.Search));
  }

  ngOnInit(): void { }

}
