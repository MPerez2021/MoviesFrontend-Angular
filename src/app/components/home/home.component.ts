import { MovieService } from './../../service/movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies: Movie[] = [];
  constructor(private movieSrv: MovieService) {

    this.movieSrv.getAllMovies().subscribe(data=>{
      this.movies = data      
    })    

   }

  ngOnInit(): void {
  }

}
