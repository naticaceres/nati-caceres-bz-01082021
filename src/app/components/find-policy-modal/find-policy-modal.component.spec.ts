import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FindPolicyModalComponent } from "./find-policy-modal.component";

describe("FindPolicyFormComponent", () => {
  let component: FindPolicyModalComponent;
  let fixture: ComponentFixture<FindPolicyModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FindPolicyModalComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPolicyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
