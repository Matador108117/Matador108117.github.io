import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsterestsComponent } from './insterests.component';

describe('InsterestsComponent', () => {
  let component: InsterestsComponent;
  let fixture: ComponentFixture<InsterestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsterestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
