import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-display-text-test]',
  templateUrl: './display-text-test.component.html',
  styleUrls: ['./display-text-test.component.css']
})
export class DisplayTextTestComponent implements OnInit {
  showSecretPassword = false;

  constructor() { }

  ngOnInit() {
  }
  onShowSecretPassword() {
    this.showSecretPassword = true;
  }
}
