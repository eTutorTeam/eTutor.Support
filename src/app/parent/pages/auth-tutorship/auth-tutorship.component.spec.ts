import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthTutorshipComponent } from './auth-tutorship.component';

describe('AuthTutorshipComponent', () => {
  let component: AuthTutorshipComponent;
  let fixture: ComponentFixture<AuthTutorshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthTutorshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthTutorshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
