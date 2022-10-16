import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PlaygroundComponent } from './playground.component';
import { PlaygroundRoutingModule } from './playground-routing.module'
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ 
    PlaygroundComponent
],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [PlaygroundRoutingModule,]

})
export class PlaygroundModule { }

