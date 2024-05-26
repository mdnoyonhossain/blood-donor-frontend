"use client"
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import assets from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { FieldValues } from "react-hook-form";
import { modifyPayload } from "@/utils/modifyPayload";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.services";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PHSelectField from "@/components/Forms/PHSelectField";
import { BloodType, DonateBlood } from "@/types";
import { registerUser } from "@/services/actions/registerUser";

export const validationSchema = z.object({
    password: z.string().min(6, "Must be at least 6 characters"),
    name: z.string().min(1, "Please enter your name!"),
    email: z.string().email("Please enter a valid email address!"),
    location: z.string().min(1, "Please enter your Location!"),
    bloodType: z.string(),
    donateBlood: z.string(),
});

export const defaultValue = {
    password: "",
    name: "",
    email: "",
    location: "",
    bloodType: "",
    donateBlood: ""
}

const RegisterPage = () => {
    const router = useRouter();

    const handleRegister = async (values: FieldValues) => {
        values.bio = 'A regular blood donor'
        values.age = 0;
        values.lastDonationDate = '0000-00-00';

        try {
            const res = await registerUser(values);
            console.log(res);
            if (res?.data?.id) {
                toast.success(res?.message);
                router.push('/login');
            }
        } catch (err: any) {
            console.error(err.message);
        }
    }

    return (
        <Container>
            <Stack sx={{ height: "100vh", justifyContent: "center", alignItems: "center" }}>
                <Box sx={{ maxWidth: 600, width: "100%", boxShadow: 1, borderRadius: 1, padding: 4, textAlign: "center" }}>
                    <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
                        <Box>
                            <Image src={assets.images.bloodLogo} width={150} height={80} alt="logo" />
                        </Box>
                        <Box>
                            <Typography variant="h6" fontWeight={600}>Register With Blood Donor</Typography>
                        </Box>
                    </Stack>
                    <Box>
                        <PHForm onSubmit={handleRegister} resolver={zodResolver(validationSchema)} defaultValues={defaultValue}>
                            <Grid container spacing={2} my={1}>
                                <Grid item md={6}>
                                    <PHInput name="name" label="User Name" fullWidth={true} />
                                </Grid>
                                <Grid item md={6}>
                                    <PHInput type="email" name="email" label="Email" fullWidth={true} />
                                </Grid>
                                <Grid item md={6}>
                                    <PHInput type="password" name="password" label="Password" fullWidth={true} />
                                </Grid>
                                <Grid item md={6}>
                                    <PHSelectField
                                        items={BloodType}
                                        name='bloodType'
                                        label='Blood Type'
                                        sx={{ textAlign: 'start' }}
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <PHInput name="location" label="Location" fullWidth={true} />
                                </Grid>
                                <Grid item md={6}>
                                    <PHSelectField
                                        items={DonateBlood}
                                        name='donateBlood'
                                        label='Donate Blood'
                                        sx={{ textAlign: 'start' }}
                                        fullWidth
                                        required
                                    />
                                </Grid>
                            </Grid>
                            <Button type="submit" fullWidth sx={{ margin: "20px 0 15px 0" }}>Register</Button>
                            <Typography component="p" fontWeight={300}>Do you already have an account? <Link href="/login">Login</Link></Typography>
                        </PHForm>
                    </Box>
                </Box>
            </Stack>
        </Container>
    );
};

export default RegisterPage;