import { Component, OnInit } from '@angular/core';
import { BusinesService } from '../services/busines.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-busines',
  templateUrl: './busines.component.html',
  styleUrls: ['./busines.component.css']
})
export class BusinesComponent implements OnInit {
  busines:any;
  constructor(private businesSer:BusinesService) { }
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
    this.businesSer.getBusinesData().subscribe((data)=>{
        this.busines = data['articles'];
        console.log(this.busines);
    })
  }

}
