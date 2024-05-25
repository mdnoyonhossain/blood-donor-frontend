"use client"
import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import { useGetIdByDonorQuery } from "@/redux/api/donationApi";
import { Box, Typography, Stack, styled, Container, Button } from "@mui/material";
import Link from "next/link";

type TParams = {
    params: {
        donorDetails: string
    }
}

const StyledInformationBox = styled(Box)(({ theme }) => ({
    background: '#f4f7fe',
    borderRadius: theme.spacing(1),
    width: '45%',
    padding: '8px 16px',
    '& p': {
        fontWeight: 600,
    },
}));

const DonorDetails = ({ params }: TParams) => {
    const { data: donorInfo, isLoading } = useGetIdByDonorQuery(params.donorDetails as string);

    if (isLoading) {
        return <Typography variant="h1" textAlign="center">Loading...</Typography>
    }
    
    return (
        <>
            <Navbar />
            <Container sx={{ my: 15 }}>
                <Typography variant='h5' color='primary.main' mb={2}>Donor Information</Typography>
                <Stack direction={{ xs: 'column', md: 'row' }} gap={2} flexWrap={'wrap'} >
                    <StyledInformationBox>
                        <Typography color='primary' variant='caption'>Blood Type</Typography>
                        <Typography>{donorInfo?.bloodType}</Typography>
                    </StyledInformationBox>
                    <StyledInformationBox>
                        <Typography color='primary' variant='caption'>Name</Typography>
                        <Typography>{donorInfo?.name}</Typography>
                    </StyledInformationBox>
                    <StyledInformationBox>
                        <Typography color='primary' variant='caption'>Email</Typography>
                        <Typography>{donorInfo?.email}</Typography>
                    </StyledInformationBox>
                    <StyledInformationBox>
                        <Typography color='primary' variant='caption'>Location</Typography>
                        <Typography>{donorInfo?.location}</Typography>
                    </StyledInformationBox>
                    <StyledInformationBox>
                        <Typography variant='caption' color='primary'>Bio</Typography>
                        <Typography>{donorInfo?.userProfile?.bio}</Typography>
                    </StyledInformationBox>
                    <StyledInformationBox>
                        <Typography variant='caption' color='primary'>Last Donation Date</Typography>
                        <Typography>{donorInfo?.userProfile?.lastDonationDate}</Typography>
                    </StyledInformationBox>
                </Stack>

                {/* <Typography variant='h5' my={2} color={'primary.main'}>Contact Details</Typography>
                <Stack direction={{ xs: 'column', md: 'row' }} flexWrap={'wrap'} gap={2}>
                    <StyledInformationBox>
                        <Typography variant='caption' color='primary'>Anointment Fee</Typography>
                        <Typography>.apointmentFee</Typography>
                    </StyledInformationBox>
                    <StyledInformationBox>
                        <Typography variant='caption' color='primary'>Qualification</Typography>
                        <Typography>.qualification</Typography>
                    </StyledInformationBox>
                    <StyledInformationBox>
                        <Typography variant='caption' color='primary'>Current Working Place</Typography>
                        <Typography>.currentWorkingPlace</Typography>
                    </StyledInformationBox>
                    <StyledInformationBox>
                        <Typography variant='caption' color='primary'>Joined</Typography>
                        <Typography>
                            {data ? new Date(data.createdAt).toLocaleDateString('en-US', {
                                month: '2-digit',
                                day: '2-digit',
                                year: '2-digit',
                            })
                                : null}
                        </Typography>
                    </StyledInformationBox>
                    <StyledInformationBox>
                        <Typography variant='caption' color='primary'>Current Status</Typography>
                        <Typography>.status</Typography>
                    </StyledInformationBox>
                    <StyledInformationBox>
                        <Typography variant='caption' color='primary'>Average Rating</Typography>
                        <Typography>.averageRating</Typography>
                    </StyledInformationBox>
                    <StyledInformationBox>
                        <Typography variant='caption' color='primary'>experience</Typography>
                        <Typography>.experience</Typography>
                    </StyledInformationBox>
                </Stack> */}
                <Button LinkComponent={Link} href="/dashboard/user/blood-request" sx={{mt: 5, width: "40%"}}>Request Blood</Button>
            </Container>
            <Footer />
        </>
    );
};

export default DonorDetails;