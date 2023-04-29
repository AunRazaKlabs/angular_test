import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  name: string = '';
  emailAddress: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private localStorage: LocalStorageService
  ) {}
  ngOnInit(): void {}

  async onSubmit() {
    let payload = {
      name: this.name,
      email: this.emailAddress,
      password: this.password,
    };
    await this.authService.signup(payload).subscribe((res) => console.log(res));
    await this.localStorage.saveData('userData', JSON.stringify(payload));
    this.authService._username = payload.name;
    this.router.navigateByUrl('home');
  }

  navigateToLogin() {
    this.router.navigateByUrl('/');
  }
}
