import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {
  DataGrid,
  esES,
  GridRowsProp,
  GridColDef,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

const columns = [
  {
    field: "first",
    headerName: "First",
    width: 140,
  },
  {
    field: "last",
    headerName: "Last",
    width: 140,
  },
];

const initialRows = [
  {
    id: 1,
    first: "Jane",
    last: "Carter",
  },
  {
    id: 2,
    first: "Jack",
    last: "Smith",
  },
  {
    id: 3,
    first: "Gill",
    last: "Martin",
  },
];

function CustomToolbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <GridToolbarContainer>
        <Grid container>
          <Grid item xs={3}>
            <GridToolbarColumnsButton startIcon={<AccessAlarmIcon />} />
          </Grid>
          <Grid item xs={6}>
            <p>Paises</p>
          </Grid>
          <Grid item xs={1}>
            <GridToolbarFilterButton />
          </Grid>
          <Grid item xs={1}>
            <GridToolbarExport />
          </Grid>
          <Grid item xs={1}>
            <GridToolbarExport />
          </Grid>
        </Grid>
      </GridToolbarContainer>
    </Box>
  );
}

function App() {
  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        rows={initialRows}
        columns={columns}
        disableColumnMenu={true}
        hideFooter={true}
        hideFooterPagination={true}
        components={{
          Toolbar: CustomToolbar,
        }}
      />
    </div>
  );
}

export default App;
