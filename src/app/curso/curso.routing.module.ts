import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { HomeComponent } from './home/home.component';
//import { LoginComponent } from './login/login.component';
import { CursoComponent } from './curso.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';


const cursoRoutes: Routes = [
  { path: 'curso', component: CursoComponent },
  { path: 'curso/:id', component: CursoDetalheComponent },
  //{ path: 'login', component: LoginComponent },
  { path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
  //{ path: '', component: HomeComponent }
]

@NgModule({
  imports: [RouterModule.forChild(cursoRoutes)],
  exports: [RouterModule]
})
export class CursoRoutingModule {

}
