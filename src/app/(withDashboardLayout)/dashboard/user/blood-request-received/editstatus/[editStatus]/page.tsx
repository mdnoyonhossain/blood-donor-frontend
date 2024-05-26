"use client";
import { useUpdateDonorStatusMutation } from "@/redux/api/donationApi";
import { DonorStatus } from "@/types";
import { Box, Button, Grid, MenuItem, Stack, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";

type TParams = {
    params: {
        editStatus: string;
    }
}

const EditStatus = ({ params }: TParams) => {
    const { handleSubmit, register } = useForm();
    const [updateDonorStatus] = useUpdateDonorStatusMutation();
    const router = useRouter();

    const handleStatusChange = async (values: FieldValues) => {
        values.id = params?.editStatus;
        console.log({ status: values.status });

        try {
            const res = await updateDonorStatus({ id: values.id, status: values.status });
            if ("data" in res && res?.data?.id) {
                toast.success("Blood Request Status Updated");
                router.push("/dashboard/user/blood-request-received");
            }
        }
        catch (error) {
            console.error(error)
        }
    }

    return (
        <Box sx={{
            px: 4,
            py: 2,
            maxWidth: 600,
            width: '100%',
            boxShadow: 1,
            borderRadius: 1,
            mx: 'auto',
            mt: {
                xs: 2,
                md: 5,
            },
        }}
        >
            <Stack alignItems='center' justifyContent='center'>
                <Typography variant='h5' fontWeight={600} sx={{ mb: 2, mt: 1 }}>Change Status</Typography>
            </Stack>
            <form onSubmit={handleSubmit(handleStatusChange)}>
                <Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            {...register("status")}
                            size="small"
                            select
                            label="Status"
                            fullWidth
                        >
                            {DonorStatus.map((name) => (
                                <MenuItem key={name} value={name}>
                                    {name}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                </Grid>
                <Button type='submit' sx={{ width: '100%', my: 2 }}>Change</Button>
            </form>
        </Box>
    );
};

export default EditStatus;