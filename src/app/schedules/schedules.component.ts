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
    this.userId = this.data.user?.id ?? 0;
    const localSchedule = localStorage.getItem('userSchedule');
    if (localSchedule) {
      this.schedule = JSON.parse(localSchedule);
    } else {
      this.fetchSchedule();
    }
  }

  fetchSchedule() {
    if (this.userId !== 0) {
      this.data.fetchSchedule(this.userId).subscribe((data) => {
        this.schedule = data;
        localStorage.setItem('userSchedule', JSON.stringify(data));
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
      console.log(error);
    }
  }

  deleteSchedule(task: Schedule) {
    this.data.removeSchedule(task.id, this.userId).subscribe(() => {
      const index = this.schedule.findIndex((item) => item.id === task.id);
      if (index !== -1) {
        this.schedule.splice(index, 1);
      }
    });
  }
}
