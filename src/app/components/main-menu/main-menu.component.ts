import {Component, OnInit} from '@angular/core';

interface MenuEntry {
  text: string,
  path: string
}

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  entries: MenuEntry[] = [
    {
      text: 'Home',
      path: '/'
    },
    {
      text: 'Invoices',
      path: '/invoice'
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
