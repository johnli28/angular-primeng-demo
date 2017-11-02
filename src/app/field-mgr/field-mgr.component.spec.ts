import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldMgrComponent } from './field-mgr.component';

describe('FieldMgrComponent', () => {
  let component: FieldMgrComponent;
  let fixture: ComponentFixture<FieldMgrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldMgrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldMgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
