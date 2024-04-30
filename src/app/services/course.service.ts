import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

interface Course {
  id: string;
  name: string;
  description: string;
  units: Unit[];
  creditPoints: number;
  year: number;
  semester: number;
}

interface Unit {
  id: string;
  name: string;
  description: string;
  courseId: string;
  year: number;
  semester: number;
  core: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'API_BASE_URL'; // need to be changed later

  constructor(private http: HttpClient) { }

  getCourseById(id: string): Observable<Course> {
    const url = `${this.apiUrl}/courses/${id}`;
    return this.http.get<Course>(url);
  }

  getCourses(): Observable<Course[]> {
    const url = `${this.apiUrl}/courses`;
    return this.http.get<Course[]>(url);
  }

  getUnitById(id: string): Observable<Unit> {
    const url = `${this.apiUrl}/units/${id}`;
    return this.http.get<Unit>(url);
  }

  getUnitsByCourseId(courseId: string): Observable<Unit[]> {
    const url = `${this.apiUrl}/courses/${courseId}/units`;
    return this.http.get<Unit[]>(url);
  }
}
