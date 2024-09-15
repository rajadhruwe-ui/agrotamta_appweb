import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BillhistoryPage } from './billhistory.page';

describe('BillhistoryPage', () => {
  let component: BillhistoryPage;
  let fixture: ComponentFixture<BillhistoryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BillhistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
