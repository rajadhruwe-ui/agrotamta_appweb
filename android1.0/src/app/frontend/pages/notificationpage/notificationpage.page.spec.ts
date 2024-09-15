import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationpagePage } from './notificationpage.page';

describe('NotificationpagePage', () => {
  let component: NotificationpagePage;
  let fixture: ComponentFixture<NotificationpagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NotificationpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
