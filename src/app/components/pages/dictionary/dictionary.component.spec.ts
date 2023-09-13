import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryComponent } from './dictionary.component';
import { AngularSvgIconModule, SvgIconComponent } from "angular-svg-icon";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

describe('DictionaryComponent', () => {
  let component: DictionaryComponent;
  let fixture: ComponentFixture<DictionaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule,
        AngularSvgIconModule.forRoot(),
      ],
      declarations: [
        DictionaryComponent,
        SvgIconComponent,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
