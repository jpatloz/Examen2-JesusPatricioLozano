import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPorterosComponent } from './formulario-porteros.component';

describe('FormularioPorterosComponent', () => {
  let component: FormularioPorterosComponent;
  let fixture: ComponentFixture<FormularioPorterosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioPorterosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioPorterosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
