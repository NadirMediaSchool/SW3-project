import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'pages/home', pathMatch: 'full' },
  { path: 'pages/home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'pages/contacts', loadChildren: () => import('./pages/contacts/contacts.module').then(m => m.ContactsModule) },
  { path: 'pages/test-directives', loadChildren: () => import('./pages/test-directives/test-directives.module').then(m => m.TestDirectivesModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
