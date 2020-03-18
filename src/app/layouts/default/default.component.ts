import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  sidebarOpened = true;
  constructor() { }

  ngOnInit(): void {
  }
  toggleMenu($event) {
    debugger
    this.sidebarOpened = !this.sidebarOpened;
  }
}
