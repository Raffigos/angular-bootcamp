export class User {
  id: number | any;
  firstName: string | any;
  lastName: string | any;
  gender: string | any;
  email: string | any;
  password: string | any;
  phone: number | any;

  constructor(id: number, firstName: string, email: string) {
    this.id = id;
    this.firstName = firstName;
    this.email = email;
  }
}
