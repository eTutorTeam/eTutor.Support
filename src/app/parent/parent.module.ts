import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentRoutingModule } from './parent-routing.module';
import { ParentComponent } from './parent.component';
import { ActivateChildrenComponent } from './pages/activate-children/activate-children.component';
import { AuthTutorshipComponent } from './pages/auth-tutorship/auth-tutorship.component';
import { TutorshipDetailComponent } from './pages/tutorship-detail/tutorship-detail.component';
import { ModifyProfileComponent } from './pages/modify-profile/modify-profile.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { RegisterParentComponent } from './pages/register-parent/register-parent.component';


@NgModule({
  declarations: [ParentComponent, ActivateChildrenComponent, AuthTutorshipComponent, TutorshipDetailComponent, ModifyProfileComponent, RegisterParentComponent],
  imports: [
    CommonModule,
    ParentRoutingModule,
    SharedComponentsModule
  ]
})
export class ParentModule { }
