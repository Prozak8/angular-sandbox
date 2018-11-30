import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { DisplayTextTestComponent } from './display-text-test/display-text-test.component';

@NgModule({
  declarations: [
    AppComponent,
    InstructionsComponent,
    DisplayTextTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
