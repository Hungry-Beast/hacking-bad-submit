import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },

  {
    field: "name",
    headerName: "Name",
    width: 110,
  },
  {
    field: "weight",
    headerName: "Weight",
    type: "number",
    width: 110,
  },
  {
    field: "fill",
    headerName: "Fill Percent",
    type: "number",
    width: 110,
  },
];

export default function UserTable({ drivers,positions }) {
  console.log(drivers);
  return (
    <Box sx={{ height: 400, width: "90%" }}>
      <DataGrid
        rows={drivers ? drivers : []}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
