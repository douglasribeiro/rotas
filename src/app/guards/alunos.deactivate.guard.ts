import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AlunoFormComponent } from '../alunos/aluno-form/aluno-form.component';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<AlunoFormComponent>{

  canDeactivate(
    component: AlunoFormComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean {
      //return component.podeMudarRota();
      return component.podeMudarRota ? component.podeDesativar(): true;
    }

}
