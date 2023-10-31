import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  ngOnInit(): void {
    this.prolangs = this.data.prolangs;
  }

  prolangs: any;

  constructor(private data: DataService) {}
}
