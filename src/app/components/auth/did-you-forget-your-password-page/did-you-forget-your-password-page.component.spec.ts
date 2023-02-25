import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DidYouForgetYourPasswordComponent } from './did-you-forget-your-password-page.component';

describe('DidYouForgetYourPasswordComponent', () => {
  let component: DidYouForgetYourPasswordComponent;
  let fixture: ComponentFixture<DidYouForgetYourPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DidYouForgetYourPasswordComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DidYouForgetYourPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
