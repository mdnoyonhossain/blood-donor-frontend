"use client"

import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Avatar, Box } from '@mui/material';
import { styled } from '@mui/system';
import Navbar from '@/components/Shared/Navbar/Navbar';
import Footer from '@/components/Shared/Footer/Footer';

const RootContainer = styled(Container)(({ theme }) => ({
    padding: theme.spacing(4),
}));

const Section = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(4),
    textAlign: 'center',
}));

const AvatarStyled = styled(Avatar)(({ theme }) => ({
    width: theme.spacing(12),
    height: theme.spacing(12),
}));

const CardStyled = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    margin: theme.spacing(2),
}));

const teamMembers = [
    { name: 'John Doe', role: 'Founder', imageUrl: '/images/john.jpg' },
    { name: 'Jane Smith', role: 'Co-Founder', imageUrl: '/images/jane.jpg' },
    { name: 'Jane Smith', role: 'Co-Founder', imageUrl: '/images/jane.jpg' },
    { name: 'Jane Smith', role: 'Co-Founder', imageUrl: '/images/jane.jpg' },
    { name: 'Jane Smith', role: 'Co-Founder', imageUrl: '/images/jane.jpg' },
    { name: 'Jane Smith', role: 'Co-Founder', imageUrl: '/images/jane.jpg' },
    // Add more team members as needed
];

const About = () => {
    return (
        <>
            <Navbar />
            <RootContainer sx={{mt: 15}}>
                <Section>
                    <Typography variant="h3" gutterBottom>
                        About Us
                    </Typography>
                    <Typography variant="h6">
                        Our mission is to facilitate blood donations by connecting donors with recipients, promoting a safe and efficient donation.
                    </Typography>
                </Section>

                <Section>
                    <Typography variant="h4" gutterBottom>
                        Our Team
                    </Typography>
                    <Grid container justifyContent="center">
                        {teamMembers.map((member) => (
                            <Grid item key={member.name} xs={12} sm={6} md={4}>
                                <CardStyled>
                                    <AvatarStyled src={member.imageUrl} alt={member.name} />
                                    <CardContent>
                                        <Typography variant="h6">{member.name}</Typography>
                                        <Typography variant="body2" color="textSecondary">{member.role}</Typography>
                                    </CardContent>
                                </CardStyled>
                            </Grid>
                        ))}
                    </Grid>
                </Section>

                <Section>
                    <Typography variant="h4" gutterBottom>
                        Contact Us
                    </Typography>
                    <Typography variant="body1">Email: contact@blooddonation.com</Typography>
                    <Typography variant="body1">Phone: +1 234 567 890</Typography>
                    <Typography variant="body1">
                        Follow us on:
                        <a href="https://facebook.com"> Facebook</a>,
                        <a href="https://twitter.com"> Twitter</a>,
                        <a href="https://instagram.com"> Instagram</a>
                    </Typography>
                </Section>
            </RootContainer>
            <Footer />
        </>
    );
};

export default About;
