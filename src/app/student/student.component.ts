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
      'Como estudiante, tu deber es continuar aprendiendo y adquiriendo los conocimientos necesarios para poder aprobar tus asignaturas y satisfacer esa sed de conocimiento que llevas dentro.',
      '¡Te brindamos una serie de herramientas que te pueden ayudar a completar tus objetivos!'
    ];
  }

}
