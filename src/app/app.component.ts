import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Homus REST Website';
  links = {
    items: ['/items'],
    widgets: ['/widgets'],
    homus: ['/homus'],
    gizmos: ['/gizmos']
  };
}
