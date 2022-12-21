import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesPorterosComponent } from './detalles-porteros.component';

describe('DetallesPorterosComponent', () => {
  let component: DetallesPorterosComponent;
  let fixture: ComponentFixture<DetallesPorterosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesPorterosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesPorterosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
