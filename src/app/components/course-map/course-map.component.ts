import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Course } from '../../interfaces/course.interface';

@Component({
  selector: 'app-course-map',
  templateUrl: './course-map.component.html',
  styleUrls: ['./course-map.component.scss']
})
export class CourseMapComponent implements OnInit {
  courses: Course[];
  selectedCourse: Course;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
    this.courseService.getCourses()
      .subscribe(courses => this.courses = courses);
  }

  onCourseSelected(course: Course): void {
    this.selectedCourse = course;
  }
}
