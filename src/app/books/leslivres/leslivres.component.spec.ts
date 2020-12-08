import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeslivresComponent } from './leslivres.component';

describe('LeslivresComponent', () => {
  let component: LeslivresComponent;
  let fixture: ComponentFixture<LeslivresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeslivresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeslivresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
