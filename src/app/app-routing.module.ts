import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillPage } from './bill/bill.page';

const routes: Routes = [
  {
    path: 'bill',
    component: BillPage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
