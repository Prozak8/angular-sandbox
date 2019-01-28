import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { DirectiveTrainingDirective } from './directive-training.directive';

@NgModule({
  declarations: [
    AppComponent,
    InstructionsComponent,
    DirectiveTrainingDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
