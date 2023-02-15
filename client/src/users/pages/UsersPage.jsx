import React from "react";
import { useUser } from "../providers/UserProvider";
import useUsers from "../hooks/useUsers";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

const UsersPage = () => {
  const { user } = useUser();
  const { value } = useUsers();
  const { users } = value;

  if (!user || !user.isAdmin) return <Navigate replace to={ROUTES.CARDS} />;

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "middleName", headerName: "middle name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "email",
      headerName: "Email",

      width: 130,
    },
    {
      field: "phone",
      headerName: "Phone",

      width: 130,
    },
    {
      field: "address",
      headerName: "Address",

      width: 130,
    },
    {
      field: "businessStatus",
      headerName: "Business Status",
      description: "By clicking on the button you can change the status.",
      // sortable: false,
      width: 130,
      // valueGetter: (params) =>
      //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  const rows = [
    {
      id: 1,
      lastName: "Snow",
      firstName: "Jon",
      phone: "0500000000",
      email: { users },
    },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 10, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 11, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 12, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 13, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 14, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 15, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 16, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 17, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  return (
    <Box style={{ height: 800, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={12}
        rowsPerPageOptions={[12]}
        checkboxSelection
      />
    </Box>
  );
};

export default UsersPage;
