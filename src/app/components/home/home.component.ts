import { MovieService } from './../../service/movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies: Movie[] = [];
  moviesFound: Movie[];
  movie: Movie;
  movieall: Movie;

  test:Movie;
  constructor(private movieSrv: MovieService, private router: Router) {


    this.movieSrv.getAllMovies().subscribe(data => {
      this.movies = data
    })


  }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
  }


  searchMovie(e: any) {
    let filterMovies: Movie[] = [];
    let query = e.target.value.toLowerCase()
    filterMovies = this.movies.filter(data => {
      return data.title.toLowerCase().indexOf(query) > -1
    })
    this.moviesFound = filterMovies;
  }

  deleteMovie(id:number){
    this.movieSrv.deleteMovie(id).subscribe(data=>{
      console.log(data);
      location.reload(); 
    });
  }
}
