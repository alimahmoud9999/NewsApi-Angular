import { Component, OnInit } from '@angular/core';
import { TecnolgyService } from '../services/tecnolgy.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  technology:any;
  title = "Welcome To Egypt technology News"
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
  constructor(private tecnoS:TecnolgyService) { }

  ngOnInit(): void {
    this.tecnoS.getTeconData().subscribe((data)=>{
      this.technology = data['articles']
    })
  }

}
