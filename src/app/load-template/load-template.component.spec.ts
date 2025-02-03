import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadTemplateComponent } from './load-template.component';

describe('LoadTemplateComponent', () => {
  let component: LoadTemplateComponent;
  let fixture: ComponentFixture<LoadTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadTemplateComponent]
    });
    fixture = TestBed.createComponent(LoadTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
