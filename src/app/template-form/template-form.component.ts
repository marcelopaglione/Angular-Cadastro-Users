import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  hidden: boolean = false;
  cepEncontrado: boolean = false;

  usuario: any = {
    nome: 'Marcelo Ortiz Paglione Junior',
    email: 'Marcelo.Paglione@gmail.com'
  }

  constructor(private http: Http) { }

  onSubmit(form) {
    console.log(form);
    console.log(form.value);
    console.log(this.usuario);
  }

  ngOnInit() {
  }

  verificaValidTouched(campo) {
    //console.log("VerificaValid Touched from "+campo+": "+!campo.valid && campo.touched);
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo) {
    return {
      'is-invalid': this.verificaValidTouched(campo)
    }
  }

  consultaCEP(cep, form) {
    console.log(cep);

    //Remove o que não é dígito
    var cep = cep.replace(/\D/g, '');

    if (cep != "") {
      //Expressão regular para validar o CEP
      var validacep = /^[0-9]{8}$/;

      //Valida o formato do CEP
      if (validacep.test(cep)) {

        this.resetaFormulario(form);

        this.http.get(`//viacep.com.br/ws/${cep}/json`)
          .pipe(map(dados => dados.json()))
          .subscribe(dados => {            
            this.populaDadosForm(dados, form)
          });
      }

    }
  }

  populaDadosForm(dados, formulario:NgForm) {         
    formulario.form.patchValue({
      endereco: {
        rua: dados.logradouro,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  resetaFormulario(formulario:NgForm){
    formulario.form.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }
}
