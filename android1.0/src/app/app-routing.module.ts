import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddFieldComponent } from './components/add-field/add-field.component';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'password-reset',
    loadChildren: () => import('./password-reset/password-reset.module').then( m => m.PasswordResetPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'logfire',
    loadChildren: () => import('./logfire/logfire.module').then( m => m.LogfirePageModule)
  },
  {
    path: 'pandingbill',
    loadChildren: () => import('./pandingbill/pandingbill.module').then( m => m.PandingbillPageModule)
  },
  {
    path: 'confirmbill',
    loadChildren: () => import('./confirmbill/confirmbill.module').then( m => m.ConfirmbillPageModule)
  },
  {
    path: 'transactionhistory',
    loadChildren: () => import('./transactionhistory/transactionhistory.module').then( m => m.TransactionhistoryPageModule)
  },
  {
    path: 'mainhomepage',
    loadChildren: () => import('./mainhomepage/mainhomepage.module').then( m => m.MainhomepagePageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'loginskip',
    loadChildren: () => import('./frontend/pages/loginskip/loginskip.module').then( m => m.LoginskipPageModule)
  },
  {
    path: 'homepage',
    loadChildren: () => import('./frontend/pages/homepage/homepage.module').then( m => m.HomepagePageModule)
  },
  {
    path: 'loginpage',
    loadChildren: () => import('./frontend/pages/loginpage/loginpage.module').then( m => m.LoginpagePageModule)
  },
  {
    path: 'registrationpage',
    loadChildren: () => import('./frontend/pages/registrationpage/registrationpage.module').then( m => m.RegistrationpagePageModule)
  },
  {
    path: 'notificationpage',
    loadChildren: () => import('./frontend/pages/notificationpage/notificationpage.module').then( m => m.NotificationpagePageModule)
  },
  {
    path: 'billcalculation',
    loadChildren: () => import('./backend/billcalculation/billcalculation.module').then( m => m.BillcalculationPageModule)
  },
  {
    path: 'studentlist',
    loadChildren: () => import('./frontend/pages/studentlist/studentlist.module').then( m => m.StudentlistPageModule)
  },
  {
    path: 'pendingbill',
    loadChildren: () => import('./frontend/pages/pendingbill/pendingbill.module').then( m => m.PendingbillPageModule)
  },
  {
    path: 'billhistory',
    loadChildren: () => import('./frontend/pages/billhistory/billhistory.module').then( m => m.BillhistoryPageModule)
  },
  {
    path: 'addstudent',
    loadChildren: () => import('./frontend/pages/addstudent/addstudent.module').then( m => m.AddstudentPageModule)
  },
  {
    path: 'billgeneration',
    loadChildren: () => import('./backend/billgeneration/billgeneration.module').then( m => m.BillgenerationPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
