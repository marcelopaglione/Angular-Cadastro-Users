import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormDebugComponent } from './template-form-debug.component';

describe('TemplateFormDebugComponent', () => {
  let component: TemplateFormDebugComponent;
  let fixture: ComponentFixture<TemplateFormDebugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateFormDebugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFormDebugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
