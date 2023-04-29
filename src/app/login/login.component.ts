import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  emailAddress: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private localStorage: LocalStorageService
  ) {}
  ngOnInit(): void {}

  async onSubmit() {
    await this.authService
      .login(this.emailAddress, this.password)
      .subscribe((res: any) => {
        if (res !== null) {
          this.localStorage.saveData('userData', res);
          this.authService._username = res.name;
          this.router.navigateByUrl('home');
        }
      });
  }

  navigateToSignup() {
    this.router.navigate(['/', 'signup']);
  }
}
