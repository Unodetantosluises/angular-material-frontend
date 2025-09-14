import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcyclePartsServiceComponent } from './motorcycle-parts-service.component';

describe('MotorcyclePartsServiceComponent', () => {
  let component: MotorcyclePartsServiceComponent;
  let fixture: ComponentFixture<MotorcyclePartsServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotorcyclePartsServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorcyclePartsServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
