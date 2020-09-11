import { Component, OnInit } from '@angular/core';
import { SportService } from '../services/sport.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {
  sports :any;
  title = "Welcome To Egypt Sport News";
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    navSpeed: 300,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  constructor(private sportData:SportService) { }



  ngOnInit(): void {
    this.sportData.getSportData().subscribe((data)=>{
      this.sports = data['articles'];
      console.log(this.sports);
    });
  }

}
