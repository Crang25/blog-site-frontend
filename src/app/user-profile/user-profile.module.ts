import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: UserProfileComponent }]),
    FlexLayoutModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class UserProfileModule {}
