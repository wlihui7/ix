import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'rental', loadChildren: './rental/rental.module#RentalPageModule' },
  { path: 'registration', loadChildren: './registration/registration.module#RegistrationPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
