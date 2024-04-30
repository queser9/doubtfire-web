import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseMapComponent } from './pages/course-map/course-map.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { UnitListComponent } from './components/unit-list/unit-list.component';
import { CourseDetailsSidebarComponent } from './components/course-details-sidebar/course-details-sidebar.component';

import { CourseService } from './services/course.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseMapComponent,
    CourseListComponent,
    UnitListComponent,
    CourseDetailsSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }