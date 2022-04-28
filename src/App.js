import * as React from "react";
import { DataGrid, GridRowsProp, GridColDef, GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector, } from "@mui/x-data-grid";

  const columns = [
    {
      field: 'first',
      headerName: 'First',
      width: 140,
    },
    {
      field: 'last',
      headerName: 'Last',
      width: 140,
    },
  ];
  
  const initialRows = [
    {
      id: 1,
      first: 'Jane',
      last: 'Carter',
    },
    {
      id: 2,
      first: 'Jack',
      last: 'Smith',
    },
    {
      id: 3,
      first: 'Gill',
      last: 'Martin',
    },
  ];
function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      {/* <GridToolbarDensitySelector /> */}
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}
function App() {
  
  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid 
        rows={initialRows} 
        columns={columns} 
        components={{
          Toolbar: CustomToolbar,
        }} />
    </div>
  );
}

export default App;
