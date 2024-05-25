"use client";
import { Box, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetMYProfileQuery } from "@/redux/api/myProfile";

const MyBloodRequestList = () => {
    const { data: myDonorRequest, isLoading } = useGetMYProfileQuery({});
    console.log(myDonorRequest);
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
            field: "email", // Change field to donor.name
            headerName: "Email",
            flex: 1,
            renderCell: ({ row }) => (
                <Typography component="a" variant="body1" color="info" sx={{ background: "#F4F7FE", padding: "10px 10px" }}>
                    {row?.donor?.email}
                </Typography>
            ),
        },
        {
            field: "locatoin", // Change field to donor.name
            headerName: "Location",
            flex: 1,
            renderCell: ({ row }) => (
                <Typography component="a" variant="body1" color="info" sx={{ background: "#F4F7FE", padding: "10px 10px" }}>
                    {row?.donor?.location}
                </Typography>
            ),
        },
    ];

    return (
        <Box>
            <Box my={2}>
                <DataGrid rows={myDonorRequest?.requestsAsRequester} columns={columns} />
            </Box>
        </Box>
    );
};

export default MyBloodRequestList;