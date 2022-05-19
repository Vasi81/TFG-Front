import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OficinasFiltroComponent } from './oficinas-filtro.component';

describe('OficinasFiltroComponent', () => {
  let component: OficinasFiltroComponent;
  let fixture: ComponentFixture<OficinasFiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OficinasFiltroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OficinasFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
