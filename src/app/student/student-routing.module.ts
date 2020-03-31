import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentComponent } from './student.component';
import { CancelTutorshipComponent } from './pages/cancel-tutorship/cancel-tutorship.component';
import { ContactTutorComponent } from './pages/contact-tutor/contact-tutor.component';
import { ModifyProfileComponent } from '../parent/pages/modify-profile/modify-profile.component';
import { ScheduleTutorshipComponent } from './pages/schedule-tutorship/schedule-tutorship.component';

const routes: Routes = [
  { path: '', component: StudentComponent },
  { path: 'cancel-tutorship', component: CancelTutorshipComponent },
  { path: 'contact-tutor', component: ContactTutorComponent },
  { path: 'modify-profile', component: ModifyProfileComponent },
  { path: 'schedule-tutorship', component: ScheduleTutorshipComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
