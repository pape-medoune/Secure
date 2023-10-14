import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent implements OnInit {
  ngOnInit(): void {}
  constructor(private router: Router,private auth:AuthService) {}
  logout() {
    alert("deconnection en cours");
    this.auth.logout();
  }
}


