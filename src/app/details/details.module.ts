import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';



import { DetailsComponent } from './details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    
    
  ],
  declarations: [DetailsComponent]
})
export class DetailsPageModule {}
