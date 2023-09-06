import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { ToolbarComponent } from "../toolbar/toolbar.component";
import { MatDialog } from "@angular/material/dialog";
import { FormsModule } from "@angular/forms";

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
      ],
      declarations: [
        MainComponent,
        ToolbarComponent,
      ],
      providers: [
        {
          provide: MatDialog,
          useValue: {}
        },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
