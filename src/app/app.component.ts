import { Component } from '@angular/core';

import { ConfirmationService, Confirmation } from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ConfirmationService]
})
export class AppComponent {
  title = 'app';
}
