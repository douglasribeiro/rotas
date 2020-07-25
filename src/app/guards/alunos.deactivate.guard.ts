import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFormCanDeactivate } from './iform-candeactive';


@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate>{

  canDeactivate(
    component: IFormCanDeactivate,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean {
      //return component.podeMudarRota();
      //return component.podeMudarRota ? component.podeDesativar(): true;
      return component.podeDesativar();
    }

}
