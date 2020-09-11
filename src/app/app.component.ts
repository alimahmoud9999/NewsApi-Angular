import { Component, HostListener } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {slider,fader} from '../app/route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slider,
    fader
  ]
})
export class AppComponent  {
  title = 'news';
  scrolltopPos = 100;
  isShow:Boolean;


  prepareRoute(outlet:RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }


@HostListener('window:scroll')
checkScroll(){
  const  scrollPo = window.document.documentElement.scrollTop || document.body.scrollTop ;
  // console.log('[scroll]',scrollPo);

  if(scrollPo >= this.scrolltopPos){
    this.isShow = true;
  }else{
    this.isShow = false;
  }
}
gotoUp(){
  window.scroll({
    top:0,
    left:0,
    behavior:'smooth'
  });
}
}


