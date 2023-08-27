import { Component } from '@angular/core';
import { Router } from '@angular/router';
import request from 'src/utils/requests';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from 'src/app/components/add/add.component';

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


  constructor(
    public router: Router,
    public dialog: MatDialog,
  ) { }

  logOut() {
    localStorage.removeItem('token')
    this.router.navigate(["login"])
  }
  ngOnInit() {
    request("/posts", "GET").then((response) => {
      this.data = response
    })
  }

  openDialog(): void{
    this.dialog.open(AddComponent)
  }

  add() {
    // this.router.navigate(["add"])
    this.openDialog()
  }

  delete(id: number) {
    request(`/posts/${id}`, "DELETE", {
    }).then((response) => {
      this.data = this.data.filter(item => item.id != id)
      alert('eliminado exitosamente')
    })
  }
}
