import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { RouterService } from '../services/router.service';
import { FormValidationService } from '../services/form-validation.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;
  isLogin: boolean = true;

  isHiddenPassword = true;
  isHiddenRepeatPassword = true;

  constructor(
    private fb: FormBuilder,
    private routerService: RouterService,
    private formValidationService: FormValidationService
  ) {
    if (this.routerService.includes('register')) {
      this.isLogin = false;
    }
    this.initForm();
  }

  ngOnInit(): void {}

  initForm() {
    const authForm: {
      email: any[];
      password: any[];
      repeatPassword?: any[];
    } = {
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      repeatPassword: [null, [Validators.required]],
    };
    if (this.isLogin) {
      delete authForm.repeatPassword;
    }
    this.authForm = this.fb.group(authForm);
  }

  get email() {
    return this.authForm.get('email');
  }

  get password() {
    return this.authForm.get('password');
  }

  get repeatPassword() {
    return this.authForm.get('repeatPassword');
  }

  getValidatorErrorMessage(
    control: AbstractControl,
    isRepeatNewPassword = false
  ) {
    if (isRepeatNewPassword) {
      return 'Пароли не совпадают!';
    }
    return this.formValidationService.getValidatorErrorMessage(control);
  }

  get disableSaveButton(): boolean {
    return (
      this.authForm.invalid ||
      !this.email.value ||
      !this.password.value ||
      (!this.isLogin
        ? (!!this.password.value && !this.repeatPassword.value) ||
          (this.password &&
            this.repeatPassword &&
            this.password.value !== this.repeatPassword.value)
        : false)
    );
  }
}
