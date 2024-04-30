import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseMapComponent } from './course-map.component';

describe('CourseMapComponent', () => {
  let component: CourseMapComponent;
  let fixture: ComponentFixture<CourseMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
