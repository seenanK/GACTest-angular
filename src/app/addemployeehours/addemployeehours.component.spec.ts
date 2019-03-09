import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddemployeehoursComponent } from './addemployeehours.component';

describe('AddemployeehoursComponent', () => {
  let component: AddemployeehoursComponent;
  let fixture: ComponentFixture<AddemployeehoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddemployeehoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddemployeehoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
