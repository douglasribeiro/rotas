import { NgModule } from "@angular/core";
import { CursoComponent } from './curso.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoService } from './curso.service';
import { CommonModule } from '@angular/common';
import { CursoRoutingModule } from './curso.routing.module';
//import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CursoComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent
  ],
  providers: [CursoService],
  imports: [
    CommonModule,
    CursoRoutingModule
    //RouterModule
  ]
})
export class CursoModule{}
