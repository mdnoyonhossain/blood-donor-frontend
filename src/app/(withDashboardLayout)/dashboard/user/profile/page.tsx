"use client";
import { useGetMYProfileQuery } from "@/redux/api/myProfile";
import { Button, Container } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import DoctorInformations from "./components/DoctorInformations";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Link from "next/link";

const Profile = () => {
    const { data, isLoading } = useGetMYProfileQuery(undefined);

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <>
            <Container sx={{ mt: 3 }}>
                <Grid container spacing={4}>
                    <Grid xs={12} md={4} mt={15}>
                        <Button LinkComponent={Link} href={`/dashboard/user/profile/profileedit/${data?.id}`} fullWidth endIcon={<ModeEditIcon />}>
                            Edit Profile
                        </Button>
                    </Grid>
                    <Grid xs={12} md={8}>
                        <DoctorInformations data={data} />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Profile;