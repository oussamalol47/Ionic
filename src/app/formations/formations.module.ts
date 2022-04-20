import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormationsPageRoutingModule } from './formations-routing.module';

import { FormationsPage } from './formations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormationsPageRoutingModule
  ],
  declarations: [FormationsPage]
})
export class FormationsPageModule {}
