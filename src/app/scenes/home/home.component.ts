import { Component } from '@angular/core';
import { Router } from '@angular/router';
import request from 'src/utils/requests';

interface Data {
  userId: number,
  id: number,
  title: string,
  body: string,

}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  data: Data[] = []

  constructor(public router: Router) { }
  logOut() {
    localStorage.removeItem('token')
    this.router.navigate(["login"])
  }
  ngOnInit() {
    request("/posts", "GET").then((response) => {
      this.data = response
    })
  }
}
