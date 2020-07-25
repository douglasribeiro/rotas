import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: 'curso' , loadChildren: () => import('./curso/curso.module').then(m => m.CursoModule)},
  { path: 'alunos', loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule)},

  { path: 'home', component: HomeComponent },
  { path: '', component: LoginComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
