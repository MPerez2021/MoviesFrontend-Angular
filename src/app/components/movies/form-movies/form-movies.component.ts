import { Movie } from 'src/app/models/movie';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from './../../../service/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-movies',
  templateUrl: './form-movies.component.html',
  styleUrls: ['./form-movies.component.scss']
})
export class FormMoviesComponent implements OnInit {

  movie:Movie = {
    id !: 0,
    description: "",
    title: "",
    duration: "",
    imageUrl: ""
  };
 
  formTitle:string = ''
  constructor(private movieSrv: MovieService, private activatedRoute: ActivatedRoute, private router: Router) { 
    const id = this.activatedRoute.snapshot.params.id 
    if(id){
      this.movieSrv.getMovieById(id).subscribe(data=>{
        this.movie = data;
        this.formTitle = 'Edit ' + data.title +' Movie ' 
      }) 
    }
    this.formTitle = 'Add new Movie'
 
  }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
  }


  onUpdate(movie:Movie){ 
    const id = this.activatedRoute.snapshot.params.id   
  
    this.movieSrv.manejadorMovies(id, movie);
    this.router.navigateByUrl('/home');
  
  }
}
