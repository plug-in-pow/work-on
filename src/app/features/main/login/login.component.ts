import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showPassword: boolean = false;
  loginForm!: FormGroup;
  bannerInfo: { message: string; showBanner: boolean } = {
    message: '',
    showBanner: false
  };
 
  constructor(private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.createForm();
    console.log(this.loginForm.invalid)
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  togglePass() {
    let ele: HTMLInputElement = document.getElementById('text-field') as HTMLInputElement;
    ele.type = ele.type === 'password' ? 'text' : 'password';
    this.showPassword = !this.showPassword;
  }

  goToSingup() {
    this.router.navigate(['auth/singup']);
  }

  submit() {
    // this.bannerInfo = {
    //   ...this.bannerInfo, 'message': 'Login Successfully', 'showBanner': true
    // }
    this.router.navigate(['home'])
  }

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

}
