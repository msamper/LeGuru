import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


//importing Material 2
import { MaterialModule } from '@angular/material';
//importing hammerJS for slider
import 'hammerjs';

@NgModule({
  declarations: [
    //LogInComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [
    //{provide: NgLocalization, useClass: NgLocaleLocalization},
  ],
  exports: []//LogInComponent]
})
export class LogInModule { }
