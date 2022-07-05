import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToysCatelogueComponent } from './add-toys-catelogue.component';

describe('AddToysCatelogueComponent', () => {
  let component: AddToysCatelogueComponent;
  let fixture: ComponentFixture<AddToysCatelogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToysCatelogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToysCatelogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
