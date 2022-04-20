import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OpenTradesComponent } from './open-trades/open-trades.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  { path: '', redirectTo: '/open-trades', pathMatch: 'full' },
  { path: 'open-trades', component: OpenTradesComponent },
  { path: 'transactions', component: TransactionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
