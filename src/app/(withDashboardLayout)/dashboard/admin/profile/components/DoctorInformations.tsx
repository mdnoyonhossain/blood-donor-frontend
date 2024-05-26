import { Box, Stack, styled, Typography } from '@mui/material';

const StyledInformationBox = styled(Box)(({ theme }) => ({
    background: '#f4f7fe',
    borderRadius: theme.spacing(1),
    width: '45%',
    padding: '8px 16px',
    '& p': {
        fontWeight: 600,
    },
}));

const DoctorInformations = ({ data }: any) => {
    console.log(data);
    return (
        <>
            <Typography variant='h5' color='primary.main' mb={2}>Personal Information</Typography>
            <Stack direction={{ xs: 'column', md: 'row' }} gap={2} flexWrap={'wrap'} >
                <StyledInformationBox>
                    <Typography color='primary' variant='caption'>Role</Typography>
                    <Typography>{data?.role}</Typography>
                </StyledInformationBox>
                <StyledInformationBox>
                    <Typography color='primary' variant='caption'>Name</Typography>
                    <Typography>{data?.name}</Typography>
                </StyledInformationBox>
                <StyledInformationBox>
                    <Typography color='primary' variant='caption'>Email</Typography>
                    <Typography>{data?.email}</Typography>
                </StyledInformationBox>
                <StyledInformationBox>
                    <Typography color='primary' variant='caption'>Blood Type</Typography>
                    <Typography>{data?.bloodType}</Typography>
                </StyledInformationBox>
                <StyledInformationBox>
                    <Typography variant='caption' color='primary'>location</Typography>
                    <Typography>{data?.location}</Typography>
                </StyledInformationBox>
                <StyledInformationBox>
                    <Typography variant='caption' color='primary'>Bio</Typography>
                    <Typography>{data?.userProfile?.bio}</Typography>
                </StyledInformationBox>
                <StyledInformationBox>
                    <Typography variant='caption' color='primary'>Age</Typography>
                    <Typography>{data?.userProfile?.age}</Typography>
                </StyledInformationBox>
                <StyledInformationBox>
                    <Typography variant='caption' color='primary'>Last Donation Date</Typography>
                    <Typography>{data?.userProfile?.lastDonationDate}</Typography>
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
            </Stack>            
        </>
    );
};

export default DoctorInformations;