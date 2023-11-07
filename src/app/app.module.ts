import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CubeComponent } from './pages/cube/cube.component';
import { ImportedModelComponent } from './pages/imported-model/imported-model.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CubeComponent,
    ImportedModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
