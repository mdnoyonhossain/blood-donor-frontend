"use client";
import { useGetMYProfileQuery, useUpdateMyProfileMutation } from "@/redux/api/myProfile";
import PHForm from '@/components/Forms/PHForm';
import PHInput from '@/components/Forms/PHInput';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import KeyIcon from '@mui/icons-material/Key';
import { FieldValues } from "react-hook-form";
import { z } from "zod";
import { BloodType } from "@/types";
import PHSelectField from "@/components/Forms/PHSelectField";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type TParams = {
    params: {
        profileId: string;
    }
}

const validationSchema = z.object({
    age: z.string().optional(),
    bio: z.string().optional(),
});

const EditProfile = ({ params }: TParams) => {
    const { data, isLoading } = useGetMYProfileQuery(undefined);
    const [updateMyProfile, { isLoading: updating }] = useUpdateMyProfileMutation();
    const router = useRouter();

    if (isLoading) {
        return <Typography variant="h1">Loading...</Typography>
    }

    const defaultValue = {
        age: data?.userProfile?.age || '',
        bio: data?.userProfile?.bio || '',
    }

    const handleProfileUpdate = async (values: FieldValues) => {
        values.age = Number(values.age)
        try {
            const res = await updateMyProfile(values);
            
            if ("data" in res && res?.data?.id) {
                toast.success("Profile Updated");
                router.push("/dashboard/admin/profile");
            }
        } catch (error) {
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
                <Typography variant='h5' fontWeight={600} sx={{ mb: 2, mt: 1 }}>Edit Profile</Typography>
            </Stack>
            <PHForm onSubmit={handleProfileUpdate} defaultValues={defaultValue} resolver={zodResolver(validationSchema)}>
                <Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <PHInput
                            name='bio'
                            label='Bio'
                            fullWidth
                            sx={{ mb: 2 }}
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                        <PHInput
                            type="number"
                            name='age'
                            label='Age'
                            fullWidth
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                </Grid>
                <Button type='submit' sx={{ width: '100%', my: 2 }}>Updated</Button>
            </PHForm>
        </Box>
    );
};

export default EditProfile;