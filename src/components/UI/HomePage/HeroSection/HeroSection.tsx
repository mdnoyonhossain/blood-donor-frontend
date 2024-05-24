"use client"
import Image from "next/image";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import assets from "@/assets";

const HeroSection = () => {

    return (
        <Container id="features" sx={{ py: { xs: 8, sm: 7 }, mt: 15 }}>
            <Grid container spacing={6}>
                <Grid item xs={12} md={6}>
                    <Box sx={{ flex: 1, position: "relative" }}>
                        <Box
                            sx={{
                                position: "absolute",
                                width: "700px",
                                left: "-90px",
                                top: "-120px",
                            }}
                        >
                        </Box>
                        <Typography variant="h3" component="h1" fontWeight={600}>
                            DONATE YOUR BLOOD AND INSPIRE OTHERS TO DONATE
                        </Typography>
                        <Typography sx={{ my: 4 }}>
                            You can give blood at any of our blood donation venues. We have several donor center and visit other vanues on various occassions
                        </Typography>
                        <Box sx={{ display: "flex", gap: 2 }}>
                            <Button>Request appointment</Button>
                            <Button variant="outlined">Contact us</Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{ display: { xs: 'none', sm: 'flex' }, width: '100%' }}
                >
                    <Card
                        variant="outlined"
                        sx={{
                            height: '100%',
                            width: '100%',
                            display: { xs: 'none', sm: 'flex' },
                            pointerEvents: 'none',
                            border: 'none'
                        }}
                    >
                        <Image src={assets.images.bloodHero} width={1000} alt="fdas" />
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default HeroSection;