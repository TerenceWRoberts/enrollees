import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEnrolleeComponent } from './add-enrollee.component';

describe('AddEnrolleeComponent', () => {
  let component: AddEnrolleeComponent;
  let fixture: ComponentFixture<AddEnrolleeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEnrolleeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEnrolleeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
