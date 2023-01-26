import { Collection } from 'models/database-model';
import { FileTypes } from 'models/files-types.model';
import StorageService from './StorageService';

type Database = {
  [key in Collection]: any[];
};

const dbService = {
  get: (table: Collection) => {
    let database: Database;
    const getDatabase = async () => {
      const service = await StorageService.readFile('db', FileTypes.JSON);
      database = JSON.parse(service);
    };

    const methods = {
      find: async (value: unknown) => {
        await getDatabase();
        if (database) {
          return database[table].find((item) => JSON.stringify(item) === JSON.stringify(value));
        }
        return null;
      },
      findByParams: async (params: { [index: string]: any }) => {
        await getDatabase();
        if (database) {
          return database[table].filter((item) => Object.entries(params).every(([key, value]) => item[key] === value));
        }
      },
      push: async (value: unknown) => {
        await getDatabase();
        if (database[table]) {
          database[table].push(value);
          StorageService.saveFile('db', FileTypes.JSON, JSON.stringify(database)).then((response) => {
            return response;
          });
        }
      },
      getAll: async () => {
        await getDatabase();
        if (database[table]) {
          return database[table];
        }
      },
    };
    return {
      ...methods,
      getAll<T>(): Promise<T> {
        return methods.getAll() as Promise<T>;
      },
      findByParams<T>(params: { [index: string]: any }): Promise<T> {
        return methods.findByParams(params) as Promise<T>;
      },
    };
  },
};

export default dbService;
