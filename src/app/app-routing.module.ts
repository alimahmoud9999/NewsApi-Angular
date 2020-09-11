import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SportComponent } from './sport/sport.component';
import { BusinesComponent } from './busines/busines.component';
import { HealthComponent } from './health/health.component';
import { TechnologyComponent } from './technology/technology.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'sport',component:SportComponent},
  {path:'busines',component:BusinesComponent},
  {path:'health',component:HealthComponent},
  {path:'tecnolgy',component:TechnologyComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
