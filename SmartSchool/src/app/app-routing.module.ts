import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfessoresComponent } from './professores/professores.component';
import { AlunosComponent } from './alunos/alunos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: "", redirectTo: "principal", pathMatch: "full"},
  {path: "alunos", component: AlunosComponent},
  {path: "professores", component: ProfessoresComponent},
  {path: "perfil", component: PerfilComponent},
  {path: "principal", component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }