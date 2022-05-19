import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProfileSecundaryComponent } from './create-profile-secundary.component';

describe('CreateProfileSecundaryComponent', () => {
  let component: CreateProfileSecundaryComponent;
  let fixture: ComponentFixture<CreateProfileSecundaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProfileSecundaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProfileSecundaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
