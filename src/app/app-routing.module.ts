import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./shared/sevices/auth.guard";


const routes: Routes = [
  { path: 'login',
  loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) },
  { path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'my-appointments',
    loadChildren: () => import('./pages/my-appointments/my-appointments.module').then(m => m.MyAppointmentsModule),
    canActivate: [AuthGuard]
  },
  { path: 'new-appointment',
    loadChildren: () => import('./pages/new-appointment/new-appointment.module').then(m => m.NewAppointmentModule) ,
    canActivate: [AuthGuard]
  },
  { path: 'not-found',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
