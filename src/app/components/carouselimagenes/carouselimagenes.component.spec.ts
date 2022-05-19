import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselimagenesComponent } from './carouselimagenes.component';

describe('CarouselimagenesComponent', () => {
  let component: CarouselimagenesComponent;
  let fixture: ComponentFixture<CarouselimagenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselimagenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselimagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
