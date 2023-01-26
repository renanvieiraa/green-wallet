import { Collection } from 'models/database-model';
import { Category } from 'models/transactions.model';
import dbService from './DataBaseService';

export const getCategoryById = async (id: number) => {
  return dbService
    .get(Collection.CATEGORIES)
    .findByParams<Category[]>({ id })
    .then((category) => category[0].name);
};
