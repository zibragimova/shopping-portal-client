import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit, OnDestroy {
    slides = [
      {image:'assets/images/jewellery/banner-jew.jpg'},
        {image: 'assets/images/jewellery/diamond-jewellery.jpg'},
        {image: 'assets/images/jewellery/princess-gold.jpg'}
      ];
      noWrapSlides = false;

  ngOnInit() {
      
  }

  ngOnDestroy(){
     
  }


}
