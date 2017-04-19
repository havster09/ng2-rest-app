import { Injectable } from '@angular/core';

@Injectable()
export class GizmoService {
  test: string;

  constructor() {
    this.test = 'yay';
  }

}
