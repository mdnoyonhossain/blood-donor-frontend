"use client";
import { Box, Button, IconButton, Stack, TextField } from '@mui/material';
import DoctorModal from './components/DoctorModal';
import { useState } from 'react';
import { useDeleteDoctorMutation, useGetAllDoctorsQuery } from '@/redux/api/doctorApi';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDebounced } from '@/redux/hooks';
import { toast } from 'sonner';
import EditIcon from "@mui/icons-material/Edit";
import Link from 'next/link';

const DoctorsPage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const query: Record<string, any> = {};
    const [searchTerm, setSearchTerm] = useState<string>("");

    const debouncedTerm = useDebounced({
        searchQuery: searchTerm,
        delay: 600
    });

    if (!!debouncedTerm) {
        query["searchTerm"] = searchTerm;
    }

    const { data, isLoading } = useGetAllDoctorsQuery({ ...query });
    const [deleteDoctor] = useDeleteDoctorMutation();

    const doctors = data?.doctors;
    const meta = data?.meta;

    const handleDelete = async (id: string) => {
        try {
            const res = await deleteDoctor(id).unwrap();
            console.log(res);
            if (res?.id) {
                toast.success("Doctor deleted successfully!!!");
            }
        }
        catch (err: any) {
            console.error(err.message);
        }
    };

    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Name', flex: 1 },
        { field: 'email', headerName: 'Email', flex: 1 },
        { field: 'contactNumber', headerName: 'Contact Number', flex: 1 },
        { field: 'gender', headerName: 'Gender', flex: 1 },
        { field: 'apointmentFee', headerName: 'Appointment Fee', flex: 1 },
        {
            field: 'action', align: "center", headerAlign: "center", headerName: 'Action', flex: 1, renderCell: ({ row }) => {
                return <Box>
                    <IconButton onClick={() => handleDelete(row.id)} aria-label="delete" sx={{ color: "red" }}>
                        <DeleteIcon />
                    </IconButton>
                    <Link href={`/dashboard/admin/doctors/edit/${row.id}`}>
                        <IconButton aria-label="delete">
                            <EditIcon />
                        </IconButton>
                    </Link>
                </Box>
            }
        }
    ];

    return (
        <Box>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Button onClick={() => setIsModalOpen(true)}>Create New Doctor</Button>
                <DoctorModal open={isModalOpen} setOpen={setIsModalOpen} />
                <TextField onChange={(e) => setSearchTerm(e.target.value)} size="small" placeholder="Search Doctors" />
            </Stack>
            {
                !isLoading ? <Box my={3}>
                    <DataGrid rows={doctors} columns={columns} />
                </Box> :
                    <h1>Loading...</h1>
            }
        </Box>
    );
};

export default DoctorsPage;