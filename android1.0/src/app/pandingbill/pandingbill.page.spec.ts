import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PandingbillPage } from './pandingbill.page';

describe('PandingbillPage', () => {
  let component: PandingbillPage;
  let fixture: ComponentFixture<PandingbillPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PandingbillPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
