import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  advices: string[];
  randomAdvice: any;
  buttonDisabled: boolean = false;

  constructor(private data: DataService) {
    this.advices = this.data.advices;
  }

  ngOnInit(): void {
    this.randomAdvice =
      this.advices[Math.floor(Math.random() * this.advices.length)];

    const disabledUntil = localStorage.getItem('disabledUntil');
    if (disabledUntil && parseInt(disabledUntil) > new Date().getTime()) {
      this.buttonDisabled = false; // true for 24 hours
    }
  }

  //disable advice button
  disableButton() {
    const now = new Date().getTime();
    localStorage.setItem(
      'disabledUntil',
      (now + 24 * 60 * 60 * 1000).toString()
    );
    this.buttonDisabled = true;
  }
}
