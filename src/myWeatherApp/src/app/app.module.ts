import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputSectionComponent } from './input-section/input-section.component';
import { BodySectionComponent } from './body-section/body-section.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiServiceService } from 'src/app/api-service.service';

@NgModule({
  declarations: [
    AppComponent,
    InputSectionComponent,
    BodySectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ApiServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
