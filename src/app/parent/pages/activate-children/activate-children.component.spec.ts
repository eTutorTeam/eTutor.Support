import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateChildrenComponent } from './activate-children.component';

describe('ActivateChildrenComponent', () => {
  let component: ActivateChildrenComponent;
  let fixture: ComponentFixture<ActivateChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivateChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
