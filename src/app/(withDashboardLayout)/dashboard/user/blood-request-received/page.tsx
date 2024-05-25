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
            headerName: "Action",
            flex: 1,
            headerAlign: "center",
            align: "center",
            renderCell: ({ row }) => {
                return (
                    <Box>
                        <Link href={`/dashboard/user/changeDonorStatus/${row.id}`}>
                            <IconButton aria-label="delete">
                                <EditIcon />
                            </IconButton>
                        </Link>
                    </Box>
                );
            }
        }
    ];

    // Conditionally add a column based on the requestStatus
    if (myDonorLists.some((row: any) => row.requestStatus === "APPROVED")) {
        columns.push({
            field: "Email",
            headerName: "Email",
            flex: 1,
            renderCell: ({ row }) => (
                <Typography component="div" variant="body1">
                    {row?.donor?.email}
                </Typography>
            )
        });

        columns.push({
            field: "Location",
            headerName: "Location",
            flex: 1,
            renderCell: ({ row }) => (
                <Typography component="div" variant="body1">
                    {row?.donor?.location}
                </Typography>
            )
        });
    }

    return (
        <Box>
            <Box my={2}>
                <DataGrid rows={myDonorLists} columns={columns} />
            </Box>
        </Box>
    );
};

export default BloodRequestReceived;