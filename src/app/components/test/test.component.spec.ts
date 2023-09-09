import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';
import { ToolbarComponent } from "../toolbar/toolbar.component";
import { ScoreboardComponent } from "../scoreboard/scoreboard.component";
import { SvgIconComponent } from "angular-svg-icon";
import { FormsModule } from "@angular/forms";

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
      ],
      declarations: [
        TestComponent,
        ToolbarComponent,
        ScoreboardComponent,
        SvgIconComponent,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
