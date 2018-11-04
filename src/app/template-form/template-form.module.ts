import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormComponent } from './template-form.component';
import { FormsModule } from '@angular/forms';
import { TemplateFormDebugComponent } from '../template-form-debug/template-form-debug.component';

@NgModule({
  declarations: [
    TemplateFormComponent,
    TemplateFormDebugComponent
  ],
  imports: [
    CommonModule,
    FormsModule    
  ]
})
export class TemplateFormModule { }
