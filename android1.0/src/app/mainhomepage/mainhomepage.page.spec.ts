import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainhomepagePage } from './mainhomepage.page';

describe('MainhomepagePage', () => {
  let component: MainhomepagePage;
  let fixture: ComponentFixture<MainhomepagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MainhomepagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
