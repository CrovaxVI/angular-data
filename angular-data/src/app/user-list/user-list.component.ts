import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  names: string[]; //Creiamo il nostro vettore di stringhe
  constructor() {
     this.names = ['Dio', 'Dio incarnato', 'Dio sotto forma di cespuglio', 'Dio sotto forma di nuvola']; //Riempiamo il vettore
  }
  ngOnInit() {
  }
}
