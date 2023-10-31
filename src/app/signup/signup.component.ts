import { User } from './../user';
import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  ngOnInit() {
    const user = localStorage.getItem('user');
    if (user) {
      const userObject = JSON.parse(user);
      this.data.user = new User(userObject.id, userObject.email);
    }
  }

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

  constructor(private data: DataService, private router: Router) {
    this.data.readUser().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  selectUser(user: User) {
    this.selectedUser = user;
  }

  createUser(form: { value: User }) {
    form.value.id = this.selectedUser.id;
    form.value.firstName = this.selectedUser.firstName;
    form.value.lastName = this.selectedUser.lastName;
    form.value.gender = this.selectedUser.gender;
    form.value.email = this.selectedUser.email;
    form.value.password = this.selectedUser.password;
    form.value.phone = this.selectedUser.phone;

    if (
      !form.value.firstName ||
      !form.value.lastName ||
      !form.value.gender ||
      !form.value.email ||
      !form.value.password ||
      !form.value.phone
    ) {
      alert('Please fill in all required fields.');
      return;
    }

    if (this.selectedUser && this.selectedUser.id) {
      this.data.readUser().subscribe((users: User[]) => {
        this.users = users;
      });
    } else {
      this.data.createUser(form.value).subscribe((user: User) => {
        alert('Registration Success!');
        this.router.navigate(['/login']);
        this.data.readUser().subscribe((users: User[]) => {
          this.users = users;
        });
      });
    }
  }

  clearInputs() {
    this.selectedUser.id = null;
    this.selectedUser.firstName = null;
    this.selectedUser.lastName = null;
    this.selectedUser.gender = null;
    this.selectedUser.email = null;
    this.selectedUser.password = null;
    this.selectedUser.phone = null;
  }
}
