import Button from '@mui/material/Button';
import { DataGrid, GridColumns } from '@mui/x-data-grid';
import { DbTable } from 'models/database-model';
import { useEffect, useState } from 'react';
import dbService from 'services/DataBaseService';

const columns: GridColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
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
      .get(DbTable.USERS)
      .push(item)
      .then((result) => {
        getAll();
        return false;
      });
  };

  const getAll = () => {
    return dbService
      .get(DbTable.USERS)
      .getAll()
      .then((response) => {
        setList(response);
      });
  };
  useEffect(() => {
    getAll();
  }, []);

  return (
    <section style={{ width: '100%', height: 600 }}>
      <DataGrid
        columns={columns}
        rows={list.map((item: any, index: number) => ({ ...item, id: index }))}
        getRowId={(item) => item.id}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />

      <Button onClick={() => additem()}>Teste</Button>
    </section>
  );
}
