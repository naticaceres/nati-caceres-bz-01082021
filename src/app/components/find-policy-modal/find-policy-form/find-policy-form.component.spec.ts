import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPolicyFormComponent } from './find-policy-form.component';

describe('FindPolicyFormComponent', () => {
  let component: FindPolicyFormComponent;
  let fixture: ComponentFixture<FindPolicyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindPolicyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPolicyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
