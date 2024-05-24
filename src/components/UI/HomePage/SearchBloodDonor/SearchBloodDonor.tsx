"use client"
import * as React from 'react';
import { Grid, MenuItem, alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { FieldValues, useForm } from 'react-hook-form';
import { BloodType } from '@/types';

const SearchBloodDonor = () => {
    const { handleSubmit, register } = useForm();

    const handleSearchDonoList = (values: FieldValues) => {
        console.log(values);
    }

    return (
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
    );
};

export default SearchBloodDonor;