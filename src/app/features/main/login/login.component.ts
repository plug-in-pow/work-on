import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showPassword: boolean = false;
  loginForm!: FormGroup;

  constructor(private fb:FormBuilder) { }

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

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

}
