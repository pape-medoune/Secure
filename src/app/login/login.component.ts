import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { user } from './user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  private formUser: user[] = [];
  public formGroup!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private auth: AuthService
  ) {}
  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      mail: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  login() {
    const mail = this.formGroup.get('mail')!.value;
    const password = this.formGroup.get('password')!.value;
    if (this.formGroup.valid) {
      this.auth.login({ mail, password}).subscribe(
        () => {
          this.route.navigate(['page']);
          console.log('Mail et Mot de passe correcte!');
        },
        (err: Error) => {
          this.route.navigate(['login']);
        }
      );
    }
  }
}
