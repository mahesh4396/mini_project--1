import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FruitsComponent } from './fruits/fruits.component';
import { HeaderComponent } from './header/header.component';
import { IcecreamComponent } from './icecream/icecream.component';
import { JuiceComponent } from './juice/juice.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { FormsModule } from '@angular/forms';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FruitsComponent,
    HeaderComponent,
    IcecreamComponent,
    JuiceComponent,
    VegetablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgbModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
