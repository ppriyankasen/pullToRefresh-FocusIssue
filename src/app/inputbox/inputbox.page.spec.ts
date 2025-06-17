import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputboxPage } from './inputbox.page';

describe('InputboxPage', () => {
  let component: InputboxPage;
  let fixture: ComponentFixture<InputboxPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InputboxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
