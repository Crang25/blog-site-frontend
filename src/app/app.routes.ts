import { Route } from '@angular/router';

export const APP_ROUTES: Route[] = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'user-profile/:id',
    loadChildren: () =>
      import('./user-profile/user-profile.module').then(
        (m) => m.UserProfileModule
      ),
  },
];
