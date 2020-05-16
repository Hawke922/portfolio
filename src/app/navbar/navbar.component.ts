import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  active = false;

  constructor() { }

  ngOnInit(): void {
  }

  activate() {
    this.active = !this.active;
  }

}
