import {useState} from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
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
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
function CustomToolbar() {
  const [activeSearch, setActiveSearch] = useState(false)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <GridToolbarContainer sx={{diplay: 'flex', flexDirection: 'column'}}>
        <Grid container>
          <Grid item xs={3}>
            <GridToolbarColumnsButton
              sx={{ fontSize: 0 }}
              startIcon={<AccessAlarmIcon sx={{ color: "red" }} />}
            />
          </Grid>
          <Grid item xs={6}>
            <p>Paises</p>
          </Grid>
          <Grid item xs={1}>
            <GridToolbarFilterButton
              sx={{ fontSize: 0 }}
              startIcon={<AccessAlarmIcon sx={{ color: "red" }} />}
            />
          </Grid>
          <Grid item xs={1}>
            <GridToolbarExport
              sx={{ fontSize: 0 }}
              startIcon={<AccessAlarmIcon sx={{ color: "red" }} />}
            />
          </Grid>
          <Grid item xs={1}>
            <SearchIcon sx={{color: 'red'}} onClick={() => setActiveSearch(!activeSearch)} />
          </Grid>
        </Grid>
        {activeSearch && <Grid container>
          <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
          </Search>
        </Grid> }
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
