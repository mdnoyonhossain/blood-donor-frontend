"use client"
import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SearchBloodDonor from "@/components/UI/HomePage/SearchBloodDonor/SearchBloodDonor";
import { useGetAllDonorListQuery } from "@/redux/api/donationApi";
import { Button, MenuItem, Stack, TextField } from "@mui/material";
import { BloodType } from "@/types";
import { FieldValues, useForm } from "react-hook-form";
import Link from "next/link";

const DonorList = () => {
    const { handleSubmit, register } = useForm();
    const query: any = {};

    const [bloodType, setBloodType] = React.useState("");
    const [location, setLocation] = React.useState("");
    const [availability, setAvailability] = React.useState("");

    query["bloodType"] = bloodType;
    query["location"] = location;
    query["availability"] = availability;

    const { data: donorLists, isLoading } = useGetAllDonorListQuery({ ...query });

    if (isLoading) {
        return <Typography variant="h1" textAlign="center">Loading...</Typography>
    }

    const handleSearchDonoList = (values: FieldValues) => {
        setBloodType(values.bloodType);
        setLocation(values.location);
        setAvailability(values.availability);
    }

    return (
        <>
            <Navbar />
            <Container
                sx={{
                    pt: { xs: 4, sm: 1 },
                    pb: { xs: 8, sm: 16 },
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: { xs: 3, sm: 6 },
                    mt: 15
                }}
            >
                <Box
                    sx={{
                        width: { sm: '100%', md: '60%' },
                        textAlign: { sm: 'left', md: 'center' },
                        mb: -5
                    }}
                >
                    <Box>
                        <Container
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                pb: 10,
                            }}
                        >
                            <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '100%' }, alignItems: "center" }}>
                                <Typography variant="h4" component="h1" fontWeight={600} sx={{ textAlign: "center", mb: -2 }}>
                                    Search Blood Donor
                                </Typography>
                                <form onSubmit={handleSubmit(handleSearchDonoList)}>
                                    <Stack
                                        direction={{ xs: 'column', sm: 'row' }}
                                        alignSelf="center"
                                        alignItems="center"
                                        spacing={1}
                                        useFlexGap
                                        sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
                                    >
                                        <Grid container spacing={2} my={1}>
                                            <Grid item md={3}>
                                                <TextField
                                                    {...register("bloodType")}
                                                    size="small"
                                                    select
                                                    label="Blood Type"
                                                    fullWidth
                                                >
                                                    {BloodType.map((name) => (
                                                        <MenuItem key={name} value={name}>
                                                            {name}
                                                        </MenuItem>
                                                    ))}
                                                </TextField>
                                            </Grid>
                                            <Grid item md={3}>
                                                <TextField
                                                    {...register('location')}
                                                    fullWidth
                                                    size="small"
                                                    label="Location"
                                                    variant="outlined"
                                                    placeholder="Location"
                                                />
                                            </Grid>
                                            <Grid item md={3}>
                                                <TextField
                                                    {...register('availability')}
                                                    fullWidth
                                                    size="small"
                                                    label="Availability"
                                                    variant="outlined"
                                                    placeholder="Availability"
                                                />
                                            </Grid>
                                            <Grid item md={3}>
                                                <Button type="submit">Search</Button>
                                            </Grid>
                                        </Grid>
                                    </Stack>
                                </form>
                            </Stack>
                        </Container>
                    </Box>
                </Box>
                <Grid container spacing={2}>
                    {donorLists?.map((donorInfo: any) => (
                        <Grid item xs={12} sm={6} md={6} key={donorInfo.id} sx={{ display: 'flex' }}>
                            <Card
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    flexGrow: 1,
                                    p: 1,
                                }}
                            >
                                <Container>
                                    <Grid container spacing={2} my={1} justifyContent="space-between">
                                        <Grid item md={5} sx={{ background: '#F4F7FE', pb: 1, borderRadius: 2, px: 1, marginRight: "10px" }}>
                                            <Typography sx={{ color: 'red', fontWeight: 600 }}>Donor name:</Typography>
                                            <Typography sx={{ color: 'green', fontWeight: 300 }}>{donorInfo?.name}</Typography>
                                        </Grid>
                                        <Grid item md={6} sx={{ background: '#F4F7FE', pb: 1, borderRadius: 2 }}>
                                            <Typography variant="body2" color="text.primary">
                                                <Typography sx={{ color: '#4876EE', fontWeight: 600 }}>Location:</Typography>
                                                <Typography sx={{ color: '#0B1C27', fontWeight: 300 }}>{donorInfo?.location}</Typography>
                                            </Typography>
                                        </Grid>
                                        <Grid item md={5} sx={{ background: '#F4F7FE', pb: 1, mt: 1, borderRadius: 2, px: 1, marginRight: "10px" }}>
                                            <Typography sx={{ color: 'red', fontWeight: 600 }}>Blood:</Typography>
                                            <Typography sx={{ color: 'green', fontWeight: 300 }}>{donorInfo?.bloodType}</Typography>
                                        </Grid>
                                        <Grid item md={6} sx={{ background: '#F4F7FE', mt: 1, pb: 1, borderRadius: 2 }}>
                                            <Typography variant="body2" color="text.primary">
                                                <Typography sx={{ color: '#4876EE', fontWeight: 600 }}>Availability:</Typography>
                                                <Typography sx={{ color: '#0B1C27', fontWeight: 300 }}>{donorInfo?.availability ? "Available" : "Not Available"}</Typography>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Container>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        pr: 2,
                                    }}
                                >
                                    <CardHeader
                                        avatar={<Avatar alt={donorInfo?.name} src={donorInfo?.name} />}
                                    />
                                    <Grid container spacing={2} my={1} textAlign={"right"}>
                                        <Grid item md={12} >
                                            <Button LinkComponent={Link} href={`/donor-list/donor-details/${donorInfo.id}`} color="info">View Donor Details</Button>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Footer />
        </>
    );
};

export default DonorList;