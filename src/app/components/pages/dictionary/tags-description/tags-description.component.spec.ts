import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsDescriptionComponent } from './tags-description.component';

describe('TagsDescriptionComponent', () => {
  let component: TagsDescriptionComponent;
  let fixture: ComponentFixture<TagsDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagsDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagsDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
