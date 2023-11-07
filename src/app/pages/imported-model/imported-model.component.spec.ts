import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportedModelComponent } from './imported-model.component';

describe('ImportedModelComponent', () => {
  let component: ImportedModelComponent;
  let fixture: ComponentFixture<ImportedModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportedModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportedModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
