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
    if (this.userId) {
      this.schedule = this.loadScheduleFromLocalStorage() || [];
      this.fetchSchedule();
    }
  }

  fetchSchedule() {
    const userId = this.data.user?.id;
    if (userId) {
      this.data.fetchSchedule(userId).subscribe((data) => {
        this.schedule = data;
        this.saveScheduleToLocalstorage(data);
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
        alert('Schedule added successfully.');
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
      alert('Schedule updated successfully.');
    } catch (error) {}
  }

  deleteSchedule(task: Schedule) {
    const confirmDelete = confirm(
      'Are you sure you want to delete this schedule?'
    );
    if (confirmDelete) {
      this.data.removeSchedule(task.id, this.userId).subscribe(() => {
        const index = this.schedule.findIndex((item) => item.id === task.id);
        if (index !== -1) {
          this.schedule.splice(index, 1);
          alert('Schedule deleted successfully.');
        }
      });
    }
  }

  private saveScheduleToLocalstorage(data: Schedule[]) {
    const localScheduleKey = `userSchedule_${this.userId}`;
    localStorage.setItem(localScheduleKey, JSON.stringify(data));
  }

  private loadScheduleFromLocalStorage(): Schedule[] | null {
    const localScheduleKey = `userSchedule_${this.userId}`;
    const storedData = localStorage.getItem(localScheduleKey);
    return storedData ? JSON.parse(storedData) : null;
  }
}
