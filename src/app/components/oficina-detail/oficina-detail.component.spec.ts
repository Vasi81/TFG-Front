import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OficinaDetailComponent } from './oficina-detail.component';

describe('OficinaDetailComponent', () => {
  let component: OficinaDetailComponent;
  let fixture: ComponentFixture<OficinaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OficinaDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OficinaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
