import { DbTable } from 'models/database-model';
import { FileTypes } from 'models/files-types.model';
import StorageService from './StorageService';

type Database = {
  [key in DbTable]: any[];
};

const dbService = {
  get: (table: DbTable) => {
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
    return methods;
  },
};

export default dbService;
