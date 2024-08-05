import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchDiagramComponent } from './arch-diagram.component';

describe('ArchDiagramComponent', () => {
  let component: ArchDiagramComponent;
  let fixture: ComponentFixture<ArchDiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchDiagramComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
