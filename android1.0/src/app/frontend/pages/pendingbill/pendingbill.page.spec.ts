import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PendingbillPage } from './pendingbill.page';

describe('PendingbillPage', () => {
  let component: PendingbillPage;
  let fixture: ComponentFixture<PendingbillPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PendingbillPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
