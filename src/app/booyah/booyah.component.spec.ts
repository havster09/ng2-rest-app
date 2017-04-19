import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooyahComponent } from './booyah.component';

describe('BooyahComponent', () => {
  let component: BooyahComponent;
  let fixture: ComponentFixture<BooyahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooyahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooyahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
