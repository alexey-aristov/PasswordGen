import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  PrevioslyGenerated: LoginPassword[];

  Current: LoginPassword;

  constructor() {
    this.PrevioslyGenerated = [];
    this.Current = new LoginPassword();

  }
  Generate() {
    this.Current.Password = Math.floor(Math.random() * 100000) + "_password"
    this.Current.Time = new Date();
  }

  SwitchToNew() {
    if (!this.Current.Login && !this.Current.Password) {
      return;
    }
    if (!this.Current.Time) {
      this.Current.Time = new Date();
    }
    this.PrevioslyGenerated.push(this.Current);
    this.Current = new LoginPassword();
  }
}

class LoginPassword {
  Login: string;
  Password: string;
  Time: Date
}