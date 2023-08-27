import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import request from 'src/utils/requests';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from 'src/app/components/add/add.component';
import { DataService } from 'src/app/service/dataService/data.service';
import { Data as DataImportet } from 'src/app/service/dataService/data.model';

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

export class HomeComponent implements OnInit {
  data: Data[] = []
  Id: number = 1;

  constructor(
    public router: Router,
    public dialog: MatDialog,
    private dataService: DataService
  ) { }

  logOut() {
    localStorage.removeItem('token')
    this.router.navigate(["login"])
  }
  ngOnInit() {
    // Cargar los datos iniciales desde la petición GET
    request("/posts", "GET").then((response) => {
      this.data = response;

      // Agregar los datos iniciales al servicio
      this.dataService.setData(response);
    });
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
      // alert('eliminado exitosamente')
    })
  }
}
