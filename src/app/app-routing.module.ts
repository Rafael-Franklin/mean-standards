import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StandardsListComponent } from './components/standards-list/standards-list.component';
import { AddStandardComponent } from './components/add-standard/add-standard.component';
import { StandardDetailComponent } from './components/standard-detail/standard-detail.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { UploadFileComponent } from './upload-file/upload-file.component'

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent},
//  { path: '', pathMatch: 'full', redirectTo: 'add-standard' },
  { path: 'standards-list', component: StandardsListComponent, canActivate: [AuthGuard] },
  { path: 'add-standard', component: AddStandardComponent, canActivate: [AuthGuard] },
  { path: 'edit-standard/:id', component: StandardDetailComponent, canActivate: [AuthGuard] },
  { path: 'upload', component: UploadFileComponent, canActivate: [AuthGuard]}
// canActivate: [AuthGuard]
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
