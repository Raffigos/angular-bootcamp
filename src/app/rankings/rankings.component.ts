import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../user';
import { Ranking } from '../ranking';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css'],
})
export class RankingsComponent {
  users: User[] = [];
  rankings: Ranking[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.fetchUsersAndRankings();
  }

  fetchUsersAndRankings() {
    this.dataService.readUser().subscribe(
      (users: User[]) => {
        this.users = users;
        this.fetchRankings();
      },
      (error) => {
        console.error('Failed to fetch users:', error);
      }
    );
  }

  fetchRankings() {
    this.dataService.getRank().subscribe(
      (rankings: Ranking[]) => {
        this.rankings = rankings;
        console.log('Fetched rankings:', this.rankings);
      },
      (error) => {
        console.error('Failed to fetch rankings:', error);
      }
    );
  }
}
