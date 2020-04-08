import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-grid',
  templateUrl: './main-grid.component.html',
  styleUrls: ['./main-grid.component.scss']
})
export class MainGridComponent implements OnInit {
  openedSidebar: boolean;

  constructor() {
    this.openedSidebar = false;
  }

  onSidebarToggle() {
    this.openedSidebar = !this.openedSidebar;
  }

  ngOnInit(): void {
  }
}
