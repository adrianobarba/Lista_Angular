<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
=======
import { ContatoService } from './../../services/contato.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, Router, RouterLink } from '@angular/router';
>>>>>>> e589f8ce0999bee9a7bbd396e15fa59b1a1bc8d2
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { ContainerComponent } from '../../componentes/container/container.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
<<<<<<< HEAD
import { ContatoService } from '../../services/contato.service';
import { MensagemErroComponent } from '../../componentes/mensagem-erro/mensagem-erro.component';
import { CabecalhoComponent } from '../../componentes/cabecalho/cabecalho.component';
=======
>>>>>>> e589f8ce0999bee9a7bbd396e15fa59b1a1bc8d2

@Component({
  selector: 'app-formulario-contato',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    SeparadorComponent,
    ReactiveFormsModule,
<<<<<<< HEAD
    RouterLink,
    MensagemErroComponent,
    CabecalhoComponent
=======
    RouterLink
>>>>>>> e589f8ce0999bee9a7bbd396e15fa59b1a1bc8d2
  ],
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css'
})
export class FormularioContatoComponent implements OnInit{

  contatoForm!: FormGroup;

  constructor(
    private contatoService: ContatoService,
<<<<<<< HEAD
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {}

  ngOnInit() {
    this.inicializarFormulario();
    this.carregarContato();
=======
  private router: Router
  ) {}

  ngOnInit() {
    this.inicializarFormulario();
>>>>>>> e589f8ce0999bee9a7bbd396e15fa59b1a1bc8d2
  }

  inicializarFormulario() {
    this.contatoForm = new FormGroup({
      nome: new FormControl('', Validators.required),
<<<<<<< HEAD
      avatar: new FormControl('', Validators.required),
=======
>>>>>>> e589f8ce0999bee9a7bbd396e15fa59b1a1bc8d2
      telefone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      aniversario: new FormControl(''),
      redes: new FormControl(''),
      observacoes: new FormControl('')
    })
  }

<<<<<<< HEAD
  obterControle(nome: string): FormControl {
    const control = this.contatoForm.get(nome)
    if(!control) {
      throw new Error('Controle de formuláio não encontrado:' + nome)
    }
    return control as FormControl
  }

  carregarContato() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id) {
      this.contatoService.buscarPorId(parseInt(id)).subscribe((contato) =>{
        this.contatoForm.patchValue(contato)
      });
    }
  }

  salvarContato() {
    const novoContato = this.contatoForm.value;
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    novoContato.id =  id ? parseInt(id) : null

    this.contatoService.editarOuSalvarContato(novoContato).subscribe(() => {
      this.contatoForm.reset();
      this.router.navigateByUrl('/lista-contatos')
    });
  }

  aoSelecionarArquivo(event: any) {
    const file: File = event.target.files[0]
    if(file) {
        this.lerArquivo(file)
    }
}

lerArquivo(file: File) {
  const reader = new FileReader();
  reader.onload = () => {
      if(reader.result) {
          this.contatoForm.get('avatar')?.setValue(reader.result)
      }
  }
  reader.readAsDataURL(file)
}

  cancelar() {
    this.contatoForm.reset();
    this.router.navigateByUrl('/lista-contatos')
=======
  salvarContato() {
   const novoContato = this.contatoForm.value;
   this.contatoService.salvarContato(novoContato).subscribe(() => {
     this.contatoForm.reset();
     this.router.navigateByUrl('/lista-contatos');
   });
  }

  cancelar() {
    this.contatoForm.reset();
>>>>>>> e589f8ce0999bee9a7bbd396e15fa59b1a1bc8d2
  }
}
