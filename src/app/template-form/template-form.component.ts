import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";
import { FormGroup, NgForm } from '@angular/forms';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  hidden: boolean = false;
  cepEncontrado: boolean = false;

  usuario: any = {
    nome: null,
    email: null
  }

  constructor(
    private http: Http,
    private cepService: ConsultaCepService
  ) { }

  onSubmit(form) {
    this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
      .pipe(map(res => res))
      .subscribe(dados => console.log(dados));
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
    if (cep != null && cep !== '') {

      this.resetaFormulario(form);
      this.cepService.consultaCEP(cep)
        .subscribe(dados => {
          this.populaDadosForm(dados, form)
        });
    }
  }

  populaDadosForm(dados, formulario: NgForm) {
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

  resetaFormulario(formulario: NgForm) {
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
