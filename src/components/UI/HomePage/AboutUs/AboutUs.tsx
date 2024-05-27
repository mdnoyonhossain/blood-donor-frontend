import Image from "next/image";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import assets from "@/assets";
import Link from "next/link";

const AboutUs = () => {
    return (
        <Container id="features" sx={{ py: { xs: 8, sm: 8 } }}>
            <Grid container spacing={6}>
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
                        <Image src={assets.images.aboutDonner} width={1000} height={100} alt="fdas" />
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} mt={7}>
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
                            Who We Are
                        </Typography>
                        <Typography variant="h5" component="h1" fontWeight={600}>
                            We are here not for income, but for outcome
                        </Typography>
                        <Typography sx={{ my: 2 }}>
                            Which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when untrammelled and when nothing prevents
                        </Typography>
                        <Box sx={{ display: "flex", gap: 2 }}>
                            <Button LinkComponent={Link} href="/about-us" variant="outlined">About Us</Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AboutUs;