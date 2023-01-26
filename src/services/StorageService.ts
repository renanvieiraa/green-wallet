import { FileTypes } from 'models/files-types.model';

const fs = window.require('fs') as typeof import('fs');

const StorageService = {
  saveFile: (fileName: string, fileType: FileTypes, data: string): Promise<{ success: boolean } | Error> => {
    return new Promise<any>((resolve, reject) => {
      fs.writeFile(`src/storage/${fileName}.${fileType}`, data, (err) => {
        err ? reject(err) : resolve({ success: true });
      });
    });
  },
  readFile: (fileName: string, fileType: FileTypes): Promise<string> => {
    return new Promise((resolve, reject) => {
      fs.readFile(`src/storage/${fileName}.${fileType}`, (err, buffer) => {
        err ? reject(err) : resolve(buffer.toString());
      });
    });
  },
};

export default StorageService;
