import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Course4Component } from './course4.component';

describe('Course4Component', () => {
  let component: Course4Component;
  let fixture: ComponentFixture<Course4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Course4Component]
    });
    fixture = TestBed.createComponent(Course4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
