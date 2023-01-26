import { Collection } from 'models/database-model';
import { Transaction } from 'models/transactions.model';
import { getCategoryById } from './CategoryService';
import dbService from './DataBaseService';

export const getAllTransactions = dbService
  .get(Collection.TRANSACTIONS)
  .getAll<Transaction[]>()
  .then((transactions) => {
    const promises: Promise<any>[] = [];
    transactions?.map((item) => {
      promises.push(
        new Promise((resolve, reject) => {
          getCategoryById(<number>item.category).then((category) => {
            resolve({ ...item, category: category });
            return { ...item, category: category };
          });
        })
      );
    });
    return Promise.all(promises).then((transactions) => transactions);
  });
