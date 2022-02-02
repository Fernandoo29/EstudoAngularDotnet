import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { Aluno } from '../models/Aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  modalRef?: BsModalRef;
  titulo = "Alunos"
  alunoSelecionado: Aluno;
  alunoForm: FormGroup;

  alunos = [
    {id: 1, nome: "Marta", sobrenome: "Antonia", telefone: "123456789"},
    {id: 2, nome: "Paula", sobrenome: "Fernandes", telefone: "456789123"},
    {id: 3, nome: "Laura", sobrenome: "Menezes", telefone: "789456123"},
    {id: 4, nome: "Luiza", sobrenome: "Souza", telefone: "456123789"},
    {id: 5, nome: "Lucas", sobrenome: "Machado", telefone: "123789456"},
    {id: 6, nome: "Pedro", sobrenome: "Lima", telefone: "789123456"},
    {id: 7, nome: "Paulo", sobrenome: "Augusto", telefone: "123123456"}
  ]

  
  constructor(private fb: FormBuilder, private modalService: BsModalService){
    this.criarForm();
  }
  
  ngOnInit(): void {
  }
  
  criarForm(){
    this.alunoForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required]
    });
  }

  selecionaAluno(aluno: Aluno){
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }

  alunoFormSubmit(){
    console.log(this.alunoForm.value);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  voltar(){
    this.alunoSelecionado = null
  }

}
