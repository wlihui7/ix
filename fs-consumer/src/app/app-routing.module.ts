import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'tab', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
  { path: 'tab5', loadChildren: './tab5/tab5.module#Tab5PageModule' },
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
