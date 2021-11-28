import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.css']
})

export class ADMComponent implements OnInit {
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }
}
