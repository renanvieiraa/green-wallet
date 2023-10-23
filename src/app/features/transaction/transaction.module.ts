import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: TransactionListComponent,
  },
];

@NgModule({
  declarations: [TransactionListComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class TransactionModule {}
