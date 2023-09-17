import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticTabsComponent } from './statistic-tabs.component';

describe('StatisticTabsComponent', () => {
  let component: StatisticTabsComponent;
  let fixture: ComponentFixture<StatisticTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatisticTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
