import { Component, OnInit } from '@angular/core';
import { HealthService } from '../services/health.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
  health:any;
  title ="Welcome To Egypt health News"
  constructor(private healthSe:HealthService) { }
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
  ngOnInit(): void {
    this.healthSe.gethealthData().subscribe((data)=>{
      this.health = data['articles'];
    })
  }

}
