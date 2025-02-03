import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricTemplateComponent } from './fabric-template.component';

describe('FabricTemplateComponent', () => {
  let component: FabricTemplateComponent;
  let fixture: ComponentFixture<FabricTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FabricTemplateComponent]
    });
    fixture = TestBed.createComponent(FabricTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
