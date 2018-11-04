import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
 
  hidden: boolean = false;

  usuario: any = {
    nome: 'Marcelo Ortiz Paglione Junior',
    email: 'Marcelo.Paglione@gmail.com'
  }

  constructor() { }

  onSubmit(form){
    console.log(form);
    console.log(form.value);
    console.log(this.usuario);
  }

  ngOnInit() {
  }

  verificaValidTouched(campo){
    console.log("VerificaValid Touched from "+campo+": "+!campo.valid && campo.touched);
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo){
    return {
      'is-invalid':this.verificaValidTouched(campo)
    }
  }

}
