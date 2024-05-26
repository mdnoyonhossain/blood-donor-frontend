"use client";
import { Box, IconButton, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetMyRequestDonorQuery } from "@/redux/api/donationApi";
import Link from "next/link";
import EditIcon from "@mui/icons-material/Edit";

const BloodRequestReceived = () => {
    const { data: myDonorLists, isLoading } = useGetMyRequestDonorQuery({});

    if (isLoading) {
        return <Typography variant="h1" textAlign="center">Loading...</Typography>
    }
    console.log(myDonorLists);
    const columns: GridColDef[] = [
        {
            field: "donor.name", // Change field to donor.name
            headerName: "Donor Name",
            flex: 1,
            renderCell: ({ row }) => (
                <Typography component="a" variant="body1" color="primary">
                    {row?.donor?.name}
                </Typography>
            ),
        },
        {
            field: "donor.bloodType", // Change field to donor.name
            headerName: "Blood Type",
            flex: 1,
            renderCell: ({ row }) => (
                <Typography component="a" variant="body1" color="primary">
                    {row?.donor?.bloodType}
                </Typography>
            ),
        },
        {
            field: "requestStatus", // Change field to donor.name
            headerName: "Request Status",
            flex: 1,
            renderCell: ({ row }) => (
                <Typography component="a" variant="body1" color="info" sx={{ background: "#F4F7FE", padding: "10px 10px" }}>
                    {row?.requestStatus}
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
                        <Link href={`/dashboard/user/blood-request-received/editstatus/${row.id}`}>
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
                <DataGrid rows={myDonorLists} columns={columns} />
            </Box>
        </Box>
    );
};

export default BloodRequestReceived;