import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSelectedChartComponent } from './show-selected-chart.component';

describe('ShowSelectedChartComponent', () => {
  let component: ShowSelectedChartComponent;
  let fixture: ComponentFixture<ShowSelectedChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSelectedChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowSelectedChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
