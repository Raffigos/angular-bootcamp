import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  firstName: string | null;

  constructor(private data: DataService) {
    this.firstName = this.data.user?.firstName || null;
    // console.log(this.data.user);
  }

  ngOnInit(): void {}
}
