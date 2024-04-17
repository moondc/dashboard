import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TickerSingleComponent } from './ticker-single.component';

describe('TickerSingleComponent', () => {
  let component: TickerSingleComponent;
  let fixture: ComponentFixture<TickerSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TickerSingleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TickerSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
