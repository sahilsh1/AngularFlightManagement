import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrappracComponent } from './bootstrapprac.component';

describe('BootstrappracComponent', () => {
  let component: BootstrappracComponent;
  let fixture: ComponentFixture<BootstrappracComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrappracComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrappracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
