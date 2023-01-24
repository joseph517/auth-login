import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import request from 'src/utils/requests';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  validEmail: string = "test@test.co"
  validPassword: string = "12345678"

  @Input() email: string = '';
  password: string = '';

  constructor(public router: Router) { }

  login() {

    if (this.email === this.validEmail && this.password === this.validPassword) {
      localStorage.setItem("token", "ABC?!124")
      this.router.navigate(["/"])
      return;
    }
    alert("credenciales incorrectas")
    return;
  }


  ngOnInit() {
    // request("/posts", "GET").then(response => console.log(response))
    // request("/posts", "POST", {
    //   title: "foo",
    //   body: "bar",
    //   userId: 1,
    // }).then(response => console.log(response))
  }
}