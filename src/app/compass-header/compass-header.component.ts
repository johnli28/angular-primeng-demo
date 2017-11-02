import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-compass-header',
  templateUrl: './compass-header.component.html',
  styleUrls: ['./compass-header.component.css']
})
export class CompassHeaderComponent implements OnInit {
  items: MenuItem[];
  activeItem: MenuItem;

  ngOnInit() {
    this.items = [
      {label:'Master Field List'},
      {label: 'Pending List'},
      {label: 'History'},
      {label: 'Log'},
      {label: 'Logout'},
      {label: 'Help' }
    ];
    this.activeItem = this.items[0];
  }

}
