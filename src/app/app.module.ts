import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MainComponent } from './main.component';
import { FormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    ClipboardModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
