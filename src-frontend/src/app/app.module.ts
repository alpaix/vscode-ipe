import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent, PreviewPipe } from './card/card.component';
import {ExtensionService} from './classes/extension.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    PreviewPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    ExtensionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
