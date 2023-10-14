import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  isLogin() {
    return localStorage.getItem('getToken') !== null;
  }

  logout() {
    localStorage.removeItem('token');
  }

  getToken():string | null {
    return localStorage.getItem('token');
  }

  login({ mail, password }: any) {
    if (mail == 'mouhamedounedev@gmail.com' && password == 'admin1234') {
      this.setToken('N0uv3AuT0k3n');
      alert('Connection reuissit');
    } else {
      alert('Mail ou password incorrecte');
      this.router.navigate(["login"]);
    }
  }
}
