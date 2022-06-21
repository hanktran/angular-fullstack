import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'buy-and-sell';

  constructor(public auth: AngularFireAuth) {}

  signInClicked(): void {
    this.auth.signInWithPopup(new GoogleAuthProvider());
  }

  signOutClicked(): void {
    this.auth.signOut();
  }
}
