import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IndexItem } from '../models/index-item';
import { StudentService } from '../services/student/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  title: string;
  indexItems: Observable<IndexItem[]>;
  roleDescription: Array<string>;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.title = 'Estudiantes';
    this.indexItems = this.studentService.getIndexItems();
    this.roleDescription = [
      // tslint:disable-next-line: max-line-length
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores porro tempora accusamus enim magni velit dolorum sequi assumenda, sunt unde repellat facere voluptas aspernatur officiis corporis perspiciatis, eius quas natus.'
    ];
  }

}
