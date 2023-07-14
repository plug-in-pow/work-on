import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  singupForm!: FormGroup;

  constructor(private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.singupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      renterPassword: ['', Validators.required]
    })
  }

  goBack() {
    this.router.navigate(['auth/login']);
  }

  clearForm() {
    this.singupForm.reset('');
  }

  get email() { return this.singupForm.get('email'); }
  get password() { return this.singupForm.get('password'); }
  get renterPassword() { return this.singupForm.get('renterPassword'); }

}
