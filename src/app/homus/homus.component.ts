import {Component, OnDestroy, OnInit} from '@angular/core';
import {HomusService} from '../shared';

@Component({
  selector: 'app-homus',
  templateUrl: './homus.component.html',
  styleUrls: ['./homus.component.css']
})
export class HomusComponent implements  OnInit, OnDestroy {
  selectedWidget;
  widgets;
  ingredient: string;
  disabled: boolean;
  love: string;
  color: string;
  smList: [string, string, string];
  smNumber: number[];
  blah: any;
  iffy: any;
  daFranchise: { fname: string; lname: string };
  constructor(private HomusService:HomusService) {}

  ngOnInit() {
    this.widgets = this.HomusService.widgets;
    this.ingredient = 'chickpea';
    this.disabled = true;
    this.love = 'habibi';
    this.color = 'blue';
    this.blah = null;
    this.iffy = null;
    this.smList = ['pink', 'green', 'yellow'];
    const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    this.smNumber = data.reduce((total, amount) => {
      return total.concat(amount);
    },[]);
    this.daFranchise = {
      fname:'Larry',
      lname:'Sanders'
    };
  }

  ngOnDestroy() {}

  selectWidget(widget) {
    this.selectedWidget = widget;
  }

  hitme(event, who) {
    console.log(event, who);
  }

  setColor(color) {
    this.color = color;
  }
}
