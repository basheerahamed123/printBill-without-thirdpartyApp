import { Component } from '@angular/core';

@Component({
  selector: 'app-bill',
  templateUrl: 'bill.page.html',
  styleUrls: ['bill.page.scss'],
})
export class BillPage {
  billDate: string;
  customerName: string;
  billItems: any[];
  totalAmount: number;

  constructor() {
    // Replace this data with your actual bill details
    this.billDate = '2023-07-26';
    this.customerName = 'Basheer ahamed';
    this.billItems = [
      { name: 'Tea', price: 12 },
      { name: 'Cofee', price: 15 },
      { name: 'Samosa', price: 10 },
    ];
    this.totalAmount = this.billItems.reduce((sum, item) => sum + item.price, 0);
  }

  printBill() {
    window.print();
  }
}
