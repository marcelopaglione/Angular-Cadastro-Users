import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormComponent } from './template-form.component';
import { FormsModule } from '@angular/forms';
import { TemplateFormDebugComponent } from '../template-form-debug/template-form-debug.component';
import { CampoControlErroComponent } from '../campo-control-erro/campo-control-erro.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    TemplateFormComponent,
    TemplateFormDebugComponent,
    CampoControlErroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule    
  ]
})
export class TemplateFormModule { }
