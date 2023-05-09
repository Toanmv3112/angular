import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutdashboardComponent } from './layoutdashboard.component';

describe('LayoutdashboardComponent', () => {
  let component: LayoutdashboardComponent;
  let fixture: ComponentFixture<LayoutdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
