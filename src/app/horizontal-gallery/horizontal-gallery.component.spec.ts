import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalGalleryComponent } from './horizontal-gallery.component';

describe('HorizontalGalleryComponent', () => {
  let component: HorizontalGalleryComponent;
  let fixture: ComponentFixture<HorizontalGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HorizontalGalleryComponent]
    });
    fixture = TestBed.createComponent(HorizontalGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
