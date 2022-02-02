import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Professor } from '../models/Professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  titulo = "Professores"
  professorSelecionado: Professor;
  profForm: FormGroup;

  professores = [
    {id: 1, nome: "Jose", disciplina: "Matemática"},
    {id: 2, nome: "Andressa", disciplina: "Física"},
    {id: 3, nome: "Jorge", disciplina: "Português"},
    {id: 4, nome: "Andre", disciplina: "Inglês"},
    {id: 5, nome: "Gloria", disciplina: "Programação"},
  ]

  constructor(private fb: FormBuilder) {
    this.criarProfForm();
   }

  ngOnInit(): void {
  }

  selecionaProfessor(prof: Professor){
    this.professorSelecionado = prof;
    this.profForm.patchValue(prof);
  }

  criarProfForm(){
    this.profForm = this.fb.group({
      nome: [''],
      disciplina: ['']
    });
  }

  submitProfForm(){
    console.log(this.profForm.value);
  }

  voltar(){
    this.professorSelecionado = null;
  }

}
