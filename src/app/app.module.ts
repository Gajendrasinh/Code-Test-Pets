import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './services/http.service';
import { OwnersComponent } from './owners/owners.component';
import { GroupByPipe } from './pipes/group-by.pipe';
import { HeaderComponent } from './header/header.component';
import { OrderByPipe } from './pipes/order-by.pipe';
import { OwnersPetsComponent } from './owners-pets/owners-pets.component';

@NgModule({
  declarations: [
    AppComponent,
    OwnersComponent,
    GroupByPipe,
    HeaderComponent,
    OrderByPipe,
    OwnersPetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
