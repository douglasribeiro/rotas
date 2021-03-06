import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from '../alunos.service';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  aluno: Aluno;
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunoService: AlunosService
  ) { }

  ngOnInit(): void {
    /*
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        return this.alunoService.getAluno(id);
      }
    );
    */

    this.inscricao = this.route.data.subscribe(
      (info: {aluno: Aluno}) => {
        console.log(info);
        this.aluno = info.aluno;
      }
    )

  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe;
  }

  editarAluno(){
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }
}
