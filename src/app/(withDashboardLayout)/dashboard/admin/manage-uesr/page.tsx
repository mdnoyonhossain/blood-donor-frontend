"use client";
import { Box, IconButton, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Link from "next/link";
import EditIcon from "@mui/icons-material/Edit";
import { useGetAllUserQuery } from "@/redux/api/authApi";

const ManageUser = () => {
    const { data: allUsers, isLoading } = useGetAllUserQuery({});

    if (isLoading) {
        return <h1>loading</h1>
    }

    const columns: GridColDef[] = [
        {
            field: "email", // Change field to donor.name
            headerName: "Email",
            flex: 1,
            renderCell: ({ row }) => (
                <Typography component="a" variant="body1" color="primary">
                    {row?.email}
                </Typography>
            ),
        },
        {
            field: "name", // Change field to donor.name
            headerName: "Name",
            flex: 1,
            renderCell: ({ row }) => (
                <Typography component="a" variant="body1" color="primary">
                    {row?.name}
                </Typography>
            ),
        },
        {
            field: "role", // Change field to donor.name
            headerName: "User Role",
            flex: 1,
            renderCell: ({ row }) => (
                <Typography component="a" variant="body1" color="info" sx={{ background: "#F4F7FE", padding: "10px 10px" }}>
                    {row?.role}
                </Typography>
            ),
        },
        {
            field: "userStatusChange", // Change field to donor.name
            headerName: "User Status",
            flex: 1,
            renderCell: ({ row }) => (
                <Typography component="a" variant="body1" color="info" sx={{ background: "#F4F7FE", padding: "10px 10px" }}>
                    {row?.userStatusChange}
                </Typography>
            ),
        },
        {
            field: "action",
            headerName: "Status Updated",
            flex: 1,
            headerAlign: "center",
            align: "center",
            renderCell: ({ row }) => {
                return (
                    <Box>
                        <Link href={`/dashboard/admin/manage-uesr/edit-user/${row.id}`}>
                            <IconButton aria-label="delete">
                                <EditIcon />
                            </IconButton>
                        </Link>
                    </Box>
                );
            }
        }
    ];

    return (
        <Box>
            <Box my={2}>
                <DataGrid rows={allUsers} columns={columns} />
            </Box>
        </Box>
    );
};

export default ManageUser;