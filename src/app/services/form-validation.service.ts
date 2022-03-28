import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormValidationService {
  constructor(private datePipe: DatePipe) {}

  getValidatorErrorMessage(field: AbstractControl): string {
    const config = {
      required: 'Обязательное поле',
      email: 'Поле должно содержать email',
      maxLength: '',
      minLength: '',
      matDatepickerMin: '',
      matDatepickerMax: '',
      min: '',
      max: '',
      pattern: 'Неверный формат',
    };

    if (field.hasError('required')) {
      return config.required;
    }
    if (field.hasError('email')) {
      return config.email;
    }
    if (field.hasError('maxlength')) {
      config.maxLength = `Максимальное количество символов - ${field.errors.maxlength.requiredLength}`;

      return config.maxLength;
    }
    if (field.hasError('minlength')) {
      config.minLength = `Минимальное количество символов - ${field.errors.minlength.requiredLength}`;

      return config.minLength;
    }
    if (field.hasError('matDatepickerMin')) {
      config.matDatepickerMin = `Минимальное значение - ${this.datePipe.transform(
        field.errors.matDatepickerMin.min,
        'dd.MM.yyyy'
      )}`;

      return config.matDatepickerMin;
    }
    if (field.hasError('matDatepickerMax')) {
      config.matDatepickerMax = `Максимальное значение - ${this.datePipe.transform(
        field.errors.matDatepickerMin.max,
        'dd.MM.yyyy'
      )}`;

      return config.matDatepickerMax;
    }
    if (field.hasError('min')) {
      config.min = `Минимальное значение - ${field.errors.min.min}`;

      return config.min;
    }
    if (field.hasError('max')) {
      config.min = `Максимальное значение - ${field.errors.max.max}`;

      return config.min;
    }
    if (field.hasError('pattern')) {
      return config.pattern;
    }
  }
}
