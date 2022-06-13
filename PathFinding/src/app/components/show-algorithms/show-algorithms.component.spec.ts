import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAlgorithmsComponent } from './show-algorithms.component';

describe('ShowAlgorithmsComponent', () => {
  let component: ShowAlgorithmsComponent;
  let fixture: ComponentFixture<ShowAlgorithmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAlgorithmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAlgorithmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
