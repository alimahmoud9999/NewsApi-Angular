import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HealthService {
  key="0c019aab310c4800ba2ef8cbd8af6a2e";
  constructor(private http:HttpClient) { }

  gethealthData(){
    return this.http.get('http://newsapi.org/v2/top-headlines?country=eg&category=health&apiKey='+this.key)
  }
}
