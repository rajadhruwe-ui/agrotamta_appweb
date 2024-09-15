import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmbillPage } from './confirmbill.page';

describe('ConfirmbillPage', () => {
  let component: ConfirmbillPage;
  let fixture: ComponentFixture<ConfirmbillPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConfirmbillPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
