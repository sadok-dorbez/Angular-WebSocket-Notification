import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInDashboardComponent } from './sign-in-dashboard.component';

describe('SignInDashboardComponent', () => {
  let component: SignInDashboardComponent;
  let fixture: ComponentFixture<SignInDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
