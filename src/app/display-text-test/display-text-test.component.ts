import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-display-text-test]',
  templateUrl: './display-text-test.component.html',
  styleUrls: ['./display-text-test.component.css']
})
export class DisplayTextTestComponent implements OnInit {
  showSecretPassword = false;
  clickLog = [];

  constructor() {  

  }

  ngOnInit() {
  }
  onShowSecretPassword() {
    this.showSecretPassword = !this.showSecretPassword;
    this.clickLog.push(new Date())
  }

  userIsSpamming() {
    return this.clickCount > 5 ? 'blue' : 'none'
  }
}
