import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SportComponent } from './sport/sport.component';
import { BusinesComponent } from './busines/busines.component';
import { HealthComponent } from './health/health.component';
import { TechnologyComponent } from './technology/technology.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'sport',component:SportComponent,data:{animation:'isRight'}},
  {path:'busines',component:BusinesComponent,data:{animation:'isRight'}},
  {path:'health',component:HealthComponent,data:{animation:'isRight'}},
  {path:'tecnolgy',component:TechnologyComponent,data:{animation:'isRight'}}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
