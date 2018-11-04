import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";
import { DropdownService } from '../shared/services/dropdown.service';
import { EstadoBr } from '../shared/models/estado-br.model';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;
  estados: EstadoBr;

  constructor(
    private formBuilder: FormBuilder,
    private http: Http,
    private dropdownService: DropdownService,
    private cepService: ConsultaCepService
  ) { }

  ngOnInit() {

    this.dropdownService.getEstadosBr().
      subscribe(dados => { this.estados = dados; })

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.min(3), Validators.max(25)]],
      email: [null, [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required],
      })
    });
  }

  consultaCEP() {
    let cep = this.formulario.get('endereco.cep').value;

    if (cep != null && cep !== '') {
      this.resetaFormulario();
      this.cepService.consultaCEP(cep)
        .subscribe(dados => {
          this.populaDadosForm(dados)
        });
    }
  }

  populaDadosForm(dados) {
    this.formulario.patchValue({
      endereco: {
        rua: dados.logradouro,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  resetaFormulario() {
    this.formulario.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

  verificaValidTouched(campo: string) {
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }

  verificaEmailInvalid() {
    let campoEmail = this.formulario.get('email');
    if (campoEmail.errors) {
      return campoEmail.errors['email'];
    }
  }

  aplicaCssErro(campo: string) {
    return {
      'is-invalid': this.verificaValidTouched(campo)
    }
  }

  resetar() {
    this.formulario.reset();
  }

  onSubmit() {
    if (this.formulario.valid) {
      this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
        .pipe(map(res => res))
        .subscribe(dados => {
          //reseta o form
          this.resetar();
          console.log(dados)
        }, (error: any) => alert('erro')
        );
    }
    else {
      this.verificaValidacoesForm(this.formulario);
    }
  }

  verificaValidacoesForm(form: FormGroup) {
    Object.keys(form.controls).forEach(campo => {
      const controle = form.get(campo);
      controle.markAsTouched();
      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);
      }
    });
  }



}
