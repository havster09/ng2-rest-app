import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Widget } from '../../shared';

@Component({
  selector: 'app-widget-detail',
  templateUrl: './widget-detail.component.html',
  styleUrls: ['./widget-detail.component.css']
})
export class WidgetDetailComponent {
  originalName: string;
  selectedWidget: Widget;
  description:string;
  daStuff:string;
  street:string;
  state:string;
  daGoodies:string;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  // isolate state mutation only on the form using set method on @Input() decorator
  @Input() set widget(value: Widget){
    if (value) { this.originalName = value.name; } // for title bining on form
    this.selectedWidget = Object.assign({}, value);
  }

  clicky(form) {
    console.log(form);
  }
}
