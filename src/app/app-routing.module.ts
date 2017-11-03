import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent}   from './dashboard.component';
import {UsersComponent}      from './users/users.component';
import {UserDetailComponent}  from './users/user-detail.component';
import {UserAddComponent} from './users/user-add.component';
import {UserUpdateComponent} from './users/user-update.component';
import {MarqueComponent} from './marques/marque.component';
import {MarqueDetailComponent} from './marques/marque-detail.component';
import {MarqueUpdateComponent} from './marques/marque-update.component';
import {MarqueAddComponent} from './marques/marque-add.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'user/detail/:id', component: UserDetailComponent},
  {path: 'user/update/:id', component: UserUpdateComponent},
  {path: 'users', component: UsersComponent},
  {path: 'user/add', component: UserAddComponent},
  {path: 'marques', component: MarqueComponent},
  {path: 'marque/detail/:id', component: MarqueDetailComponent},
  {path: 'marque/update/:id', component: MarqueUpdateComponent},
  {path: 'marque/add', component: MarqueAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
