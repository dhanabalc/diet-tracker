import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';



import { AppComponent } from './app.component';
import { FoodEditorComponent } from './foodeditor/foodeditor.component';
import { ConvertToUnitsPipe } from './shared/convert-to-units.pipe';
import { MaterialModule } from './shared/material.module';
import { Component } from '@angular/core/src/metadata/directives';
import { ChartComponent } from './chart/chart.component';


@NgModule({
  declarations: [
    AppComponent,
    FoodEditorComponent,
    ConvertToUnitsPipe,
    ChartComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot(
      [
        {path:'food', component:FoodEditorComponent},
        {path:'chart', component:ChartComponent}
      ]
    )
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
