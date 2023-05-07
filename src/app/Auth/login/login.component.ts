import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) {

  }
  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      userEmail:['', Validators.required, Validators.email]
    })
  }

  gotoSignUp(){
    //this.router.navigate(['signup']);
    this.formPopulate();
  }

  formPopulate() {
    this.loginForm.controls['userName'].patchValue('Tufayel Ahmed');
    this.loginForm.controls['userEmail'].patchValue('ex@gmail.com');
  }

}
