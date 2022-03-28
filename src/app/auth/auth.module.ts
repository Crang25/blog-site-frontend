import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { AuthComponent } from './auth.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'login',
        component: AuthComponent
      },
      {
        path: 'register',
        component: AuthComponent
      }
    ]),
    MatCardModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class AuthModule {}
