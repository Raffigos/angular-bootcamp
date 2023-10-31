import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Schedule } from '../schedule';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css'],
})
export class SchedulesComponent {
  schedule: Schedule[] = [];
  userId: number = this.data.user?.id ?? 0;
  description: string = '';
  date: string = '';

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.fetchSchedule();
  }

  fetchSchedule() {
    console.log(this.userId);
    if (this.userId !== 0) {
      this.data.fetchSchedule(this.userId).subscribe((data) => {
        this.schedule = data;
      });
    }
  }

  addSchedule() {
    this.data
      .addSchedule(this.description, this.date, this.userId)
      .subscribe(() => {
        this.fetchSchedule();
        this.description = '';
        this.date = '';
      });
  }

  async updateSchedule(task: Schedule) {
    try {
      await this.data.modifySchedule(
        task.id,
        task.description,
        task.date,
        this.userId
      );
      this.fetchSchedule();
    } catch (error) {
      // Handle error here
    }
  }

  deleteSchedule(task: Schedule) {
    this.data.removeSchedule(task.id, this.userId).subscribe(() => {
      this.fetchSchedule();
    });
  }
}
