import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormDebugComponent } from './template-form-debug/template-form-debug.component';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';

@NgModule({
  declarations: [
    TemplateFormDebugComponent,
    CampoControlErroComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TemplateFormDebugComponent,
    CampoControlErroComponent
  ]
})
export class SharedModule { }
