import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDesAdminsComponent } from './gestion-des-admins.component';

describe('GestionDesAdminsComponent', () => {
  let component: GestionDesAdminsComponent;
  let fixture: ComponentFixture<GestionDesAdminsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionDesAdminsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDesAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
