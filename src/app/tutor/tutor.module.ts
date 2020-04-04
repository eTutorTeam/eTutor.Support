import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorRoutingModule } from './tutor-routing.module';
import { TutorComponent } from './tutor.component';
import { AcceptTutorshipComponent } from './pages/accept-tutorship/accept-tutorship.component';
import { StartTutorshipComponent } from './pages/start-tutorship/start-tutorship.component';
import { EndTutorshipComponent } from './pages/end-tutorship/end-tutorship.component';
import { CancelTutorshipComponent } from './pages/cancel-tutorship/cancel-tutorship.component';
import { ModifyProfileComponent } from './pages/modify-profile/modify-profile.component';
import { ContactStudentComponent } from './pages/contact-student/contact-student.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { RegisterTutorComponent } from './pages/register-tutor/register-tutor.component';


@NgModule({
  declarations: [
    TutorComponent,
    AcceptTutorshipComponent,
    StartTutorshipComponent,
    EndTutorshipComponent,
    CancelTutorshipComponent,
    ModifyProfileComponent,
    ContactStudentComponent,
    RegisterTutorComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    TutorRoutingModule
  ]
})
export class TutorModule { }
