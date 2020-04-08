import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.scss']
})
export class MainToolbarComponent implements OnInit {

  @Output() toggleSidebar: EventEmitter<null>;

  constructor() {
    this.toggleSidebar = new EventEmitter<null>();
  }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.toggleSidebar.emit();
  }

}
