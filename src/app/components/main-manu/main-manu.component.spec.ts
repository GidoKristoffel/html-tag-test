import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainManuComponent } from './main-manu.component';
import { AngularSvgIconModule, SvgIconComponent, SvgIconRegistryService } from "angular-svg-icon";
import { HttpClientModule } from "@angular/common/http";

describe('MainManuComponent', () => {
  let component: MainManuComponent;
  let fixture: ComponentFixture<MainManuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        AngularSvgIconModule.forRoot(),
      ],
      declarations: [
        MainManuComponent,
        SvgIconComponent,
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainManuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
