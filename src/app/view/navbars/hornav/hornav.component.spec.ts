import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HornavComponent } from './hornav.component';

describe('HornavComponent', () => {
  let component: HornavComponent;
  let fixture: ComponentFixture<HornavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HornavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HornavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
