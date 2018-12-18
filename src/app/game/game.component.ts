import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Output() gameStarted = new EventEmitter<{number: number}>();
  @Output() gameStop = new EventEmitter<{}>();
  generatedNumber = 0;
  ref;

  constructor() { }

  ngOnInit() {
  }

  onStart() {
    this.ref = setInterval(() => {
      this.generatedNumber ++;
      this.gameStarted.emit({number: this.generatedNumber});
    }, 1000);
  }

  onStop() {
    clearInterval(this.ref);
    this.generatedNumber = 0;
    this.gameStop.emit({});
  }

}