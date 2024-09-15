import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddstudentPage } from './addstudent.page';

describe('AddstudentPage', () => {
  let component: AddstudentPage;
  let fixture: ComponentFixture<AddstudentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddstudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
