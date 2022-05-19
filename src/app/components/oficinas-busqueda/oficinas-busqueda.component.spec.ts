import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OficinasBusquedaComponent } from './oficinas-busqueda.component';

describe('OficinasBusquedaComponent', () => {
  let component: OficinasBusquedaComponent;
  let fixture: ComponentFixture<OficinasBusquedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OficinasBusquedaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OficinasBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
