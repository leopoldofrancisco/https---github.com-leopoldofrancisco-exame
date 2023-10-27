import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarFotoComponent } from './buscar-foto.component';

describe('BuscarFotoComponent', () => {
  let component: BuscarFotoComponent;
  let fixture: ComponentFixture<BuscarFotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarFotoComponent]
    });
    fixture = TestBed.createComponent(BuscarFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
