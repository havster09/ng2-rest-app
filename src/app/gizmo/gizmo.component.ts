import { Component, OnInit } from '@angular/core';
import {GizmoService} from '../shared';

@Component({
  selector: 'app-gizmo',
  templateUrl: './gizmo.component.html',
  styleUrls: ['./gizmo.component.css']
})
export class GizmoComponent implements OnInit {
   smString: string;

  constructor(private GizmoService: GizmoService) { }

  ngOnInit() {
    this.smString = this.GizmoService.test;
  }

  smClick() {
    this.smString = '';
  }

}
