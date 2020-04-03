import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IndexItem } from '../models/index-item';
import { TutorService } from '../services/tutor/tutor.service';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.scss']
})
export class TutorComponent implements OnInit {


  title: string;
  indexItems: Observable<IndexItem[]>;
  roleDescription: Array<string>;

  constructor(private tutorService: TutorService) { }

  ngOnInit(): void {
    this.title = 'Tutores';
    this.indexItems = this.tutorService.getIndexItems();
    this.roleDescription = [
      // tslint:disable-next-line: max-line-length
      'Como tutor, tu deber es hacer llegar la mayor cantidad de conocimiento posible hacia todos los estudiantes.',
      'eTutor te ayuda a completar esa meta, ¡y ganar dinero en el intento!'
    ];
  }

}
