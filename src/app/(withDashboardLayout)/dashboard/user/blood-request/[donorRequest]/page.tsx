"use client"
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGetMYProfileQuery } from "@/redux/api/myProfile";
import { useCreateDonorRequestMutation } from "@/redux/api/donationApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type TParams = {
    params: {
        donorRequest: string
    }
}

export const validationSchema = z.object({
    phoneNumber: z.string().min(11, "Must be 11 characters"),
    hospitalName: z.string({ required_error: "Please enter your hospitalName!" }),
    hospitalAddress: z.string({ required_error: "Please enter a hospitalAddress!" }),
    reason: z.string({ required_error: "Please enter your reason!" }),
    dateOfDonation: z.string({ required_error: "Please enter your reason!" }),
});

export const defaultValue = {
    phoneNumber: "",
    hospitalName: "",
    hospitalAddress: "",
    reason: "",
    dateOfDonation: ""
}

const BloodRequest = ({ params }: TParams) => {
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
                    <PHForm onSubmit={handleBloodRequest} resolver={zodResolver(validationSchema)} defaultValues={defaultValue}>
                        <Grid container spacing={2} my={1}>
                            <Grid item md={6}>
                                <PHInput type="number" name="phoneNumber" label="Phone Number" fullWidth={true} />
                            </Grid>
                            <Grid item md={6}>
                                <PHInput name="hospitalName" label="Hospital Name" fullWidth={true} />
                            </Grid>
                            <Grid item md={6}>
                                <PHInput name="hospitalAddress" label="Hospital Address" fullWidth={true} />
                            </Grid>
                            <Grid item md={6}>
                                <PHInput name="reason" label="Reason" fullWidth={true} />
                            </Grid>
                            <Grid item md={6}>
                                <PHInput type="date" name="dateOfDonation" label="Date Of Donation" fullWidth={true} />
                            </Grid>
                        </Grid>
                        <Button type="submit" fullWidth sx={{ margin: "20px 0 15px 0" }}>Send Blood Request</Button>
                    </PHForm>
                </Box>
            </Box>
        </Stack>
    );
};

export default BloodRequest;