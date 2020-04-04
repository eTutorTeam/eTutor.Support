import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { ScheduleTutorshipComponent } from './pages/schedule-tutorship/schedule-tutorship.component';
import { CancelTutorshipComponent } from './pages/cancel-tutorship/cancel-tutorship.component';
import { ModifyProfileComponent } from './pages/modify-profile/modify-profile.component';
import { ContactTutorComponent } from './pages/contact-tutor/contact-tutor.component';
import { RegisterStudentComponent } from './pages/register-student/register-student.component';


@NgModule({
  declarations: [StudentComponent, ScheduleTutorshipComponent, CancelTutorshipComponent, ModifyProfileComponent, ContactTutorComponent, RegisterStudentComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedComponentsModule
  ],
  exports: [
    StudentRoutingModule
  ]
})
export class StudentModule { }
