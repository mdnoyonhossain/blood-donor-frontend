"use client";
import assets from "@/assets";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.services";
import { Box, Button, Container, Grid, Stack, Typography, TextField } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";


const LoginPage = () => {
    const { register, handleSubmit } = useForm()
    const router = useRouter();
    const [error, setError] = useState("");

    const handleLogin = async (values: FieldValues) => {
        try {
            const res = await userLogin(values);

            if (res?.data?.token) {
                toast.success(res?.message);
                storeUserInfo({ accessToken: res?.data?.token });
                // router.push('/dashboard');
            }
            else {
                setError(res?.message);
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
                            <Typography variant="h6" fontWeight={600}>Login with Blood Donation</Typography>
                        </Box>
                    </Stack>
                    {error && <Box>
                        <Typography sx={{
                            backgroundColor: "red",
                            padding: "1px",
                            borderRadius: "4px",
                            color: "white",
                            marginTop: "6px"
                        }}>
                            {error}
                        </Typography>
                    </Box>}
                    <Box>
                        <form onSubmit={handleSubmit(handleLogin)}>
                            <Grid container spacing={2} my={1}>
                                <Grid item md={6}>
                                    <TextField
                                        {...register('email')}
                                        fullWidth
                                        type="email"
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
                            </Grid>
                            <Button type="submit" fullWidth sx={{ margin: "20px 0 15px 0" }}>Login</Button>
                            <Typography component="p" fontWeight={300}>Don&apos;t have an account? <Link href="/register">Create an account</Link></Typography>
                        </form>
                    </Box>
                </Box>
            </Stack>
        </Container>
    );
};

export default LoginPage;