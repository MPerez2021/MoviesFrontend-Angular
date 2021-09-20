import { Movie } from './../models/movie';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) {}

  private apiUrl = "http://localhost:8080/movie";


  getAllMovies(): Observable<Movie[]>{
    return this.httpClient.get<Movie[]>(this.apiUrl + '/all');
  }

  getMovieById(id:number):Observable<Movie>{
    return this.httpClient.get<Movie>(this.apiUrl + `/find/${id}`);
  }

  addMovie(movie:Movie): Observable<Movie>{
    return this.httpClient.post<Movie>(this.apiUrl + '/add', movie);
  }
  
  updateMovie(id:number,movie: Movie):Observable<any>{
    return this.httpClient.put<any>(this.apiUrl + `/update/${id}`, movie)
  }

  deleteMovie(id:number):Observable<void>{
    return this.httpClient.delete<void>(this.apiUrl + `/delete/${id}`)
  }

  manejadorMovies(id:number, movie: Movie){
    if(id){
      this.updateMovie(id,movie).subscribe(data=>{
        console.log(data);        
      })
    }else{
      this.addMovie(movie).subscribe(data=>{
        console.log(data);
        location.reload();        
      })
    }
  }
}
