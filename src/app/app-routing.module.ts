import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FruitsComponent } from './fruits/fruits.component';
import { IcecreamComponent } from './icecream/icecream.component';
// import { JuicesComponent } from './juices/juices.component';
import { JuiceComponent } from './juice/juice.component';

import { VegetablesComponent } from './vegetables/vegetables.component';

const routes: Routes = [
  {path:'fruits', component:FruitsComponent},
  {path:'vegetables',component:VegetablesComponent},
  // {path:'juices',component:JuicesComponent},
  {path:'icecrem',component:IcecreamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
