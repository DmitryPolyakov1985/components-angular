import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;

  constructor() {}

  ngOnInit(): void {}

  // tslint:disable-next-line: typedef
  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
