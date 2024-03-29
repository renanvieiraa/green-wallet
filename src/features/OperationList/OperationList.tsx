import { DataGrid, GridColumns } from '@mui/x-data-grid';
import { Collection } from 'models/database-model';
import { useEffect, useState } from 'react';
import dbService from 'services/DataBaseService';
import { getAllTransactions } from 'services/TransactionService';

const columns: GridColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'description', headerName: 'Descrição', width: 130 },
  { field: 'value', headerName: 'Valor', width: 130 },
  {
    field: 'category',
    headerName: 'Categoria',
  },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];

// const rows: GridRowsProp = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

export default function OperationList() {
  const [list, setList] = useState<any>([]);

  const additem = () => {
    const item = { lastName: 'eeee', firstName: 'Harvey', age: 652 };
    dbService
      .get(Collection.USERS)
      .push(item)
      .then((result) => {
        getAll();
        return false;
      });
  };

  const getAll = () => {
    return getAllTransactions.then((result) => {
      console.log(result);
      setList(result);
    });
  };
  useEffect(() => {
    getAll();
  }, []);

  return (
    <section style={{ width: '100%', height: 600 }}>
      <DataGrid
        columns={columns}
        rows={list}
        getRowId={(item) => item.id}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </section>
  );
}
