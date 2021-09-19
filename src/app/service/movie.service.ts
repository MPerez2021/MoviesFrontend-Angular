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
    return this.httpClient.post<Movie>(this.httpClient + '/add', movie);
  }
  
  updateMovie(id:number, movie: Movie):Observable<Movie>{
    return this.httpClient.put<Movie>(this.httpClient + `/update/${id}`, movie)
  }

  deleteMovie(id:number):Observable<void>{
    return this.httpClient.delete<void>(this.httpClient + `/delete/${id}`)
  }
}
