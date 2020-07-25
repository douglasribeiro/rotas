import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  mostrarMenuEmitter = new EventEmitter<boolean>();

  private usuarioAutenticado: boolean = false;

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){
    this.usuarioAutenticado = false;
    this.mostrarMenuEmitter.emit(false);
    if( usuario.nome === 'usuario@email.com' && usuario.senha === '123456'){
      this.usuarioAutenticado = true;

      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(['/home']);
    }
  }
}
