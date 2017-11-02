import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompassBodyComponent } from './compass-body.component';

describe('CompassBodyComponent', () => {
  let component: CompassBodyComponent;
  let fixture: ComponentFixture<CompassBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompassBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompassBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
