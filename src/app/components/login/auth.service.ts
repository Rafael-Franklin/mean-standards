import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { User } from './user';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  userAutenticado: boolean = false;

  showMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  doLogin(user: User){

    if (user.name === 'adm' &&
        user.password === '123') {
            this.userAutenticado = true;

            this.showMenuEmitter.emit(true);

            this.router.navigate(['add-standard']);
        }
    else {

      this.userAutenticado = false;
      Swal.fire("Name and Password Incorrect!");
      this.showMenuEmitter.emit(false);
    }
  }

  userIsAutenticado(){

    return this.userAutenticado;
  }

}
