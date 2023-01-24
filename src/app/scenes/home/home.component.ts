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
  Id: number = 1;


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

  add() {
    this.router.navigate(["add"])
  }

  delete(id: number) {
    console.log(id)
    request(`/posts/${id}`, "DELETE", {
    }).then((response) => {
      console.log(response)
      alert('eliminado exitosamente')
    })
  }
}
