import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeTechComponent } from './components/employee-tech/employee-tech.component';
import { EmployeeBusinessComponent } from './components/employee-business/employee-business.component';

const routes: Routes = [{
  path: 'tech',
  component: EmployeeTechComponent,
},
{
  path: '',
  redirectTo: '/tech',
  pathMatch: 'full'
},
{
  path: 'business',
  component: EmployeeBusinessComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
