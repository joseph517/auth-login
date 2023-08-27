import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import request from 'src/utils/requests';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  title: string = '';
  body: string = ''

  constructor(
    public router: Router,
    public dialogRef: MatDialogRef<AddComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string
  ) { }

  ngOnInit(): void {
  }

  add() {
    if (this.title && this.body) {
      if (this.title.length > 3 && this.body.length > 3) {
        request("/posts", "POST", {
          title: this.title,
          body: this.body,
          userId: 1,
        }).then((response) => {
          alert(`registro exitoso`)
          this.router.navigate(["/"])
        })
      } else {
        alert('debe tener mas de 3 caracteres')
      }
    }
    else {
      alert('datos incompletos')
    }

  }
}
