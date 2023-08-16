import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertErrComponent } from './alert-err.component';

describe('AlertErrComponent', () => {
  let component: AlertErrComponent;
  let fixture: ComponentFixture<AlertErrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertErrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertErrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
