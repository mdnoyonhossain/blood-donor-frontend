"use client";
import { useUpdateUserStatusMutation } from "@/redux/api/authApi";
import { UserAccountStatusSelected, UserRoleSelect } from "@/types";
import { Box, Button, Grid, MenuItem, Stack, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";

type TParams = {
    params: {
        userId: string;
    }
}

const EditUser = ({ params }: TParams) => {
    const { handleSubmit, register } = useForm();
    const [updateUserStatus] = useUpdateUserStatusMutation();
    const router = useRouter();

    const handleEditUser = async (values: FieldValues) => {
        console.log({ id: params.userId, data: { role: values.role, userStatusChange: values.userStatusChange } });
        const res = await updateUserStatus({ id: params.userId, data:{ role: values.role, userStatusChange: values.userStatusChange } });

        if ("data" in res && res?.data?.id) {
            toast.success("User Status Updated");
            router.push("/dashboard/admin/manage-uesr");
        }
        try {

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
                <Typography variant='h5' fontWeight={600} sx={{ mb: 2, mt: 1 }}>User Status and Role Updated</Typography>
            </Stack>
            <form onSubmit={handleSubmit(handleEditUser)}>
                <Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            {...register("role")}
                            size="small"
                            select
                            label="Role"
                            fullWidth
                        >
                            {UserRoleSelect.map((name) => (
                                <MenuItem key={name} value={name.toLocaleLowerCase()}>
                                    {name}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} mt={2}>
                        <TextField
                            {...register("userStatusChange")}
                            size="small"
                            select
                            label="User Status Change"
                            fullWidth
                        >
                            {UserAccountStatusSelected.map((name) => (
                                <MenuItem key={name} value={name.toLocaleLowerCase()}>
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

export default EditUser;