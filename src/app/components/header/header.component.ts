import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  element = document.getElementsByTagName('app-root')
  constructor() {
   
   }

  ngOnInit(): void {
    let currentTheme = localStorage.getItem('theme');
    if(currentTheme === 'dark'){
      this.element[0].classList.add('dark-mode')
    }
  }

  darkMode(){
    let theme= 'light';   
    this.element[0].classList.toggle('dark-mode');
    if(this.element[0].classList.contains('dark-mode')){
      theme= 'dark';
    }

    localStorage.setItem('theme', theme)
  }

  seeMenu(){
    const menu = document.getElementsByClassName('header__right');
    menu[0].classList.toggle('show');   
    
  }
}
