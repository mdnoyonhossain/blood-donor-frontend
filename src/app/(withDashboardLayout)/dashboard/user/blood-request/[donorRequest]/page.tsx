"use client"
import { Box, Button, Grid, Stack, Typography, TextField } from "@mui/material";
import { FieldValues, useForm } from "react-hook-form";
import { useGetMYProfileQuery } from "@/redux/api/myProfile";
import { useCreateDonorRequestMutation } from "@/redux/api/donationApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type TParams = {
    params: {
        donorRequest: string
    }
}

const BloodRequest = ({ params }: TParams) => {
    const { handleSubmit, register } = useForm();
    const { data: myProfileData, isLoading } = useGetMYProfileQuery({});
    const [createDonorRequest] = useCreateDonorRequestMutation();
    const router = useRouter();

    if (isLoading) {
        return <Typography variant="h1" textAlign="center">Loading...</Typography>
    }

    const handleBloodRequest = async (values: FieldValues) => {
        values.donorId = params.donorRequest;
        const res = await createDonorRequest(values);
        if ("data" in res && res?.data?.id) {
            toast.success("Blood Donor Request Successfully!");
            router.push('/dashboard/user/blood-request-list');
        }
    }

    return (
        <Stack >
            <Box sx={{ maxWidth: 600, width: "100%", boxShadow: 1, borderRadius: 1, padding: 4, textAlign: "center" }}>
                <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
                    <Box>
                        <Typography variant="h6" fontWeight={600}>Request With Blood Donor</Typography>
                    </Box>
                </Stack>
                <Box>
                    <form onSubmit={handleSubmit(handleBloodRequest)} >
                        <Grid container spacing={2} my={1}>
                            <Grid item md={6}>
                                <TextField
                                    {...register('phoneNumber')}
                                    fullWidth
                                    type="number"
                                    size="small"
                                    required
                                    label="Phone Number"
                                    variant="outlined"
                                    placeholder="Phone Number"
                                />
                            </Grid>
                            <Grid item md={6}>
                                {/* <PHInput name="hospitalName" label="Hospital Name" fullWidth={true} /> */}
                                <TextField
                                    {...register('hospitalName')}
                                    fullWidth
                                    size="small"
                                    required
                                    label="Hospital Name"
                                    variant="outlined"
                                    placeholder="Hospital Name"
                                />
                            </Grid>
                            <Grid item md={6}>
                                {/* <PHInput name="hospitalAddress" label="Hospital Address" fullWidth={true} /> */}
                                <TextField
                                    {...register('hospitalAddress')}
                                    fullWidth
                                    size="small"
                                    required
                                    label="Hospital Address"
                                    variant="outlined"
                                    placeholder="Hospital Address"
                                />
                            </Grid>
                            <Grid item md={6}>
                                {/* <PHInput name="reason" label="Reason" fullWidth={true} /> */}
                                <TextField
                                    {...register('reason')}
                                    fullWidth
                                    size="small"
                                    label="Reason"
                                    required
                                    variant="outlined"
                                    placeholder="Reason"
                                />
                            </Grid>
                            <Grid item md={6}>
                                {/* <PHInput type="date" name="dateOfDonation" label="Date Of Donation" fullWidth={true} /> */}
                                <TextField
                                    {...register('dateOfDonation')}
                                    fullWidth
                                    type="date"
                                    size="small"
                                    required
                                    label="Date Of Donation"
                                    variant="outlined"
                                    placeholder="Date Of Donation"
                                />
                            </Grid>
                        </Grid>
                        <Button type="submit" fullWidth sx={{ margin: "20px 0 15px 0" }}>Send Blood Request</Button>
                    </form>
                </Box>
            </Box>
        </Stack>
    );
};

export default BloodRequest;
