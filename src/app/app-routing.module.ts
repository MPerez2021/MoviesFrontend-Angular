import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormMoviesComponent } from './components/movies/form-movies/form-movies.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent 
  },
  {
    path: 'movie/update/:id',
    component: FormMoviesComponent
  },
  {
    path: 'movie/add',
    component: FormMoviesComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

