import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OficinasModalityComponent } from './oficinas-modality.component';

describe('OficinasModalityComponent', () => {
  let component: OficinasModalityComponent;
  let fixture: ComponentFixture<OficinasModalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OficinasModalityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OficinasModalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
