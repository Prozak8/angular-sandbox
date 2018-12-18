import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers: number[] = [];

  onGameStarted(numberGenerated: {number: number}) {
    this.numbers.push(numberGenerated.number);
  }

  onGameStop() {
    this.numbers = [];
  }

}