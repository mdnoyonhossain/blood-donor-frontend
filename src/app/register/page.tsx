"use client"
import { Box, Button, Container, Grid, MenuItem, Stack, Typography, TextField } from "@mui/material";
import assets from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { BloodType, DonateBlood } from "@/types";
import { registerUser } from "@/services/actions/registerUser";


const RegisterPage = () => {
    const { register, handleSubmit } = useForm()
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
                        <form onSubmit={handleSubmit(handleRegister)}>
                            <Grid container spacing={2} my={1}>
                                <Grid item md={6}>
                                    <TextField
                                        {...register('name')}
                                        fullWidth
                                        required
                                        size="small"
                                        label="User Name"
                                        variant="outlined"
                                        placeholder="User Name"
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <TextField
                                        {...register('email')}
                                        fullWidth
                                        required
                                        size="small"
                                        label="Email"
                                        variant="outlined"
                                        placeholder="Email"
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <TextField
                                        {...register('password')}
                                        fullWidth
                                        type="password"
                                        required
                                        size="small"
                                        label="Password"
                                        variant="outlined"
                                        placeholder="Password"
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <TextField
                                        {...register("bloodType")}
                                        size="small"
                                        select
                                        label='Blood Type'
                                        required
                                        fullWidth
                                    >
                                        {BloodType.map((name) => (
                                            <MenuItem key={name} value={name}>
                                                {name}
                                            </MenuItem>
                                        ))}
                                    </TextField>

                                </Grid>
                                <Grid item md={6}>
                                    <TextField
                                        {...register('location')}
                                        fullWidth
                                        required
                                        size="small"
                                        label="Location"
                                        variant="outlined"
                                        placeholder="Location"
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <TextField
                                        {...register("donateBlood")}
                                        size="small"
                                        select
                                        label='Donate Blood'
                                        fullWidth
                                    >
                                        {DonateBlood.map((name) => (
                                            <MenuItem key={name} value={name}>
                                                {name}
                                            </MenuItem>
                                        ))}
                                    </TextField>

                                </Grid>
                            </Grid>
                            <Button type="submit" fullWidth sx={{ margin: "20px 0 15px 0" }}>Register</Button>
                            <Typography component="p" fontWeight={300}>Do you already have an account? <Link href="/login">Login</Link></Typography>
                        </form>
                    </Box>
                </Box>
            </Stack>
        </Container>
    );
};

export default RegisterPage;