import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosoficinasComponent } from './serviciosoficinas.component';

describe('ServiciosoficinasComponent', () => {
  let component: ServiciosoficinasComponent;
  let fixture: ComponentFixture<ServiciosoficinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosoficinasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosoficinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
