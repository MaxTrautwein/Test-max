import { Routes } from '@angular/router';
import {Home} from './home/home';
import {Login} from './login/login';
import {Register} from './register/register';
import {Delete} from './delete/delete';
import {Captcha} from './captcha/captcha';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'register',
    component: Register,
  },
  {
    path: 'delete',
    component: Delete,
  },
  {
    path: 'captcha',
    component: Captcha,
  },
];
