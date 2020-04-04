import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutorComponent } from './tutor.component';
import { AcceptTutorshipComponent } from './pages/accept-tutorship/accept-tutorship.component';
import { StartTutorshipComponent } from './pages/start-tutorship/start-tutorship.component';
import { CancelTutorshipComponent } from '../tutor/pages/cancel-tutorship/cancel-tutorship.component';
import { EndTutorshipComponent } from './pages/end-tutorship/end-tutorship.component';
import { ModifyProfileComponent } from './pages/modify-profile/modify-profile.component';
import { ContactStudentComponent } from './pages/contact-student/contact-student.component';
import { RegisterTutorComponent } from './pages/register-tutor/register-tutor.component';

const routes: Routes = [
  { path: '', component: TutorComponent },
  { path: 'accept-tutorship', component: AcceptTutorshipComponent },
  { path: 'start-tutorship', component: StartTutorshipComponent },
  { path: 'cancel-tutorship', component: CancelTutorshipComponent },
  { path: 'end-tutorship', component: EndTutorshipComponent },
  { path: 'modify-profile', component: ModifyProfileComponent },
  { path: 'contact-student', component: ContactStudentComponent },
  { path: 'register-tutor', component: RegisterTutorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorRoutingModule { }
