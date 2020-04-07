import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpenseListComponent } from './expense-list/expense-list.component'


const routes: Routes = [
  {
    path: 'expenses', component: ExpenseListComponent
  },
  { 
    path: '', redirectTo: '/expenses', pathMatch: 'full' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
