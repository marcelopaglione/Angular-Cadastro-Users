import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormDebugComponent } from './template-form-debug/template-form-debug.component';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { DropdownService } from './services/dropdown.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    TemplateFormDebugComponent,
    CampoControlErroComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule
  ],
  exports:[
    TemplateFormDebugComponent,
    CampoControlErroComponent
  ],
  providers:[
    DropdownService
  ]
})
export class SharedModule { }
