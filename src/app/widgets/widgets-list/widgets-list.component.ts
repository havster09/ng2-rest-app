import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Widget } from '../../shared';

@Component({
  selector: 'app-widgets-list',
  templateUrl: './widgets-list.component.html',
  styleUrls: ['./widgets-list.component.css']
})
export class WidgetsListComponent {
  @Input() widgets: Widget[];
  @Input() havenMessage: string;
  @Output() selected = new EventEmitter();
  @Output() clearHavenMessage = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() featured = new EventEmitter();
}
