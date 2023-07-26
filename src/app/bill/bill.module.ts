import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { BillPage } from './bill.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    IonicModule, // Add this line to import IonicModule
    RouterModule.forChild([
      {
        path: '',
        component: BillPage,
      },
    ]),
  ],
  declarations: [BillPage],
})
export class BillPageModule {}
