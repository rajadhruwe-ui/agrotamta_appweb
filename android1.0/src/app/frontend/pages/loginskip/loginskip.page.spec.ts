import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginskipPage } from './loginskip.page';

describe('LoginskipPage', () => {
  let component: LoginskipPage;
  let fixture: ComponentFixture<LoginskipPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginskipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
