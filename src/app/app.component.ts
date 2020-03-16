import { Component, OnInit } from '@angular/core';
import { ParentService } from './services/parent/parent.service';
import { IndexItem } from './models/index-item';
import { Observable } from 'rxjs';
import { StudentService } from './services/student/student.service';
import { TutorService } from './services/tutor/tutor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isCollapsed = false;
  parentItems: Observable<IndexItem[]>;
  studentItems: Observable<IndexItem[]>;
  tutorItems: Observable<IndexItem[]>;
  constructor(
      private parentService: ParentService,
      private studentService: StudentService,
      private tutorService: TutorService
    ) {}

  ngOnInit(): void {
    this.parentItems = this.parentService.getIndexItems();
    this.studentItems = this.studentService.getIndexItems();
    this.tutorItems = this.tutorService.getIndexItems();
  }
}
