import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimePipeComponent } from './time-pipe.component';

describe('TimePipeComponent', () => {
  let component: TimePipeComponent;
  let fixture: ComponentFixture<TimePipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimePipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
