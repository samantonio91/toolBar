import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import {
  DataGrid,
  esES,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
} from "@mui/x-data-grid";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

const columns = [
  {
    field: "first",
    headerName: "Columna 1",
    editable: false,
    sortable: false,
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "last",
    headerName: "Columna 2",
    editable: false,
    sortable: false,
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "action",
    headerName: "Columna 3",
    editable: false,
    sortable: false,
    flex: 1,
    maxWidth: 200,
    headerAlign: "center",
    align: "center",
  },
];

const initialRows = [
  {
    id: 1,
    first: "Jane",
    last: "Carter",
    action: "Edit",
  },
  {
    id: 2,
    first: "Jack",
    last: "Smith",
    action: "Edit",
  },
  {
    id: 3,
    first: "Gill",
    last: "Martin",
    action: "Edit",
  },
];

function CustomToolbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <GridToolbarContainer>
        <Grid container>
          <Grid item xs={3}>
            <GridToolbarColumnsButton sx={{color: 'transparent'}}  startIcon={<AccessAlarmIcon sx={{color: 'red'}} />}/>
          </Grid>
          <Grid item xs={6}>
            <p>Paises</p>
          </Grid>
          <Grid item xs={1}>
            <GridToolbarFilterButton sx={{color: 'transparent'}}  startIcon={<AccessAlarmIcon sx={{color: 'red'}} />}/>
          </Grid>
          <Grid item xs={1}>
            <GridToolbarExport sx={{color: 'transparent'}}  startIcon={<AccessAlarmIcon sx={{color: 'red'}} />}/>
          </Grid>
          <Grid item xs={1}>
            <GridToolbarExport sx={{color: 'transparent'}}  startIcon={<AccessAlarmIcon sx={{color: 'red'}} />}/>
          </Grid>
        </Grid>
      </GridToolbarContainer>
    </Box>
  );
}

function App() {
  return (
    <div style={{ height: "100%", width: "80%" }}>
      <DataGrid
        autoHeight
        disableColumnMenu
        hideFooter
        hideFooterPagination
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        // localeText={{
        //   toolbarColumns: "",
        //   toolbarFilters: "",
        //   toolbarExport: "",
        // }}
        rows={initialRows}
        columns={columns}
        components={{
          Toolbar: CustomToolbar,
        }}
      />
    </div>
  );
}

export default App;
