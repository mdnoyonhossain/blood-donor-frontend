'use client';
import PHForm from '@/components/Forms/PHForm';
import PHInput from '@/components/Forms/PHInput';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { FieldValues } from 'react-hook-form';
import { z } from 'zod';
import KeyIcon from '@mui/icons-material/Key';
import { useChangePasswordMutation } from '@/redux/api/authApi';
import { toast } from 'sonner';
import { useState } from 'react';

const validationSchema = z.object({
    oldPassword: z.string().min(6, 'Must be at least 6 characters long'),
    newPassword: z.string().min(6, 'Must be at least 6 characters long'),
    confirmPassword: z.string().min(6, 'Must be at least 6 characters long'),
});

const ChangePassword = () => {
    const [passwordMatched, setPasswordMatched] = useState("");
    const [changePassword] = useChangePasswordMutation();

    const onSubmit = async (values: FieldValues) => {
        setPasswordMatched("");

        if (values.newPassword !== values.confirmPassword) {
            return setPasswordMatched("Confirm Password Not Matched!")
        }

        try {
            const res = await changePassword(values);
            console.log(res);
            if ('data' in res && res?.data?.message) {
                toast.success("Password Changed Successfully");
            } else {
                throw new Error("Incorrect Old Password");
            }
        }
        catch (error) {
            toast.error("Incorrect Old Password");
            console.error(error);
        }
    };

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
                <Box sx={{ '& svg': { width: 100, height: 100 } }}>
                    <KeyIcon sx={{ color: 'primary.main' }} />
                </Box>
                <Typography variant='h5' fontWeight={600} sx={{ mb: 2, mt: -1.5 }}>Change Password</Typography>
            </Stack>
            <PHForm onSubmit={onSubmit} defaultValues={{ oldPassword: '', newPassword: '', confirmPassword: '' }} resolver={zodResolver(validationSchema)}>
                <Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <PHInput
                            name='oldPassword'
                            type='password'
                            label='Old Password'
                            fullWidth
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <PHInput
                            name='newPassword'
                            type='password'
                            label='New Password'
                            fullWidth
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <PHInput
                            name='confirmPassword'
                            type='password'
                            label='Confirm Password'
                            fullWidth
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                </Grid>
                <Typography color="red">{passwordMatched}</Typography>
                <Button type='submit' sx={{ width: '100%', my: 2 }}>change Password</Button>
            </PHForm>
        </Box>
    );
};

export default ChangePassword;