import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from './components/login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-mean-sigo';

  showMenu: boolean = false;

  constructor(public authService: AuthService) {

  }

  ngOnInit(){

      this.authService.showMenuEmitter.subscribe(
        show => this.showMenu = show
      );
  }

}
