import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  users: User[] | any;
  selectedUser: User = {
    id: null,
    firstName: null,
    lastName: null,
    gender: null,
    email: null,
    password: null,
    phone: null,
  };

  ngOnInit() {
    if (this.data.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    }
  }

  constructor(private data: DataService, private router: Router) {
    this.data.readUser().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  login(form: { value: User }) {
    if (
      form.value.email === this.selectedUser.email &&
      form.value.password === this.selectedUser.password
    ) {
      this.data
        .readLogin({
          email: this.selectedUser.email,
          password: this.selectedUser.password,
        })
        .subscribe((response) => {
          if (response) {
            this.data.login(response);
            this.router.navigate(['/dashboard']);
            this.clearInputs();
          } else {
            alert('Wrong credentials. Please try again.');
          }
        });
    }
  }

  clearInputs() {
    this.selectedUser.id = null;
    this.selectedUser.email = null;
    this.selectedUser.password = null;
  }
}
