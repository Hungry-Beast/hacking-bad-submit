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
    field: "carType",
    headerName: "Car Type",
    type: "number",
    width: 110,
  },
];

export default function TruckTable({ drivers }) {
  console.log(drivers)
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
