import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-template-form-debug',
  templateUrl: './template-form-debug.component.html',
  styleUrls: ['./template-form-debug.component.css']
})
export class TemplateFormDebugComponent implements OnInit {

  constructor() { }

  @Input() form;

  ngOnInit() {
  }

}
