import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsAndPoliciesComponent } from './terms-and-policies.component';

describe('TermsAndPoliciesComponent', () => {
  let component: TermsAndPoliciesComponent;
  let fixture: ComponentFixture<TermsAndPoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermsAndPoliciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsAndPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
