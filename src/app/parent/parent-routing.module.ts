import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParentComponent } from './parent.component';
import { ActivateChildrenComponent } from './pages/activate-children/activate-children.component';
import { AuthTutorshipComponent } from './pages/auth-tutorship/auth-tutorship.component';
import { TutorshipDetailComponent } from './pages/tutorship-detail/tutorship-detail.component';
import { ModifyProfileComponent } from './pages/modify-profile/modify-profile.component';

const routes: Routes = [
  { path: '', component: ParentComponent },
  { path: 'activate-children', component: ActivateChildrenComponent},
  { path: 'auth-tutorship', component: AuthTutorshipComponent},
  { path: 'tutorship-detail', component: TutorshipDetailComponent},
  { path: 'modify-profile', component: ModifyProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentRoutingModule { }
