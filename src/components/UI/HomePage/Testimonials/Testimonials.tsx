import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material';


const userTestimonials = [
    {
        avatar: <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />,
        name: 'Remy Sharp',
        occupation: 'Senior Engineer',
        testimonial:
            "I absolutely love how versatile this product is! Whether I'm tackling work projects or indulging in my favorite hobbies, it seamlessly adapts to my changing needs. Its intuitive design has truly enhanced my daily routine, making tasks more efficient and enjoyable.",
    },
    {
        avatar: <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />,
        name: 'Travis Howard',
        occupation: 'Lead Product Designer',
        testimonial:
            "One of the standout features of this product is the exceptional customer support. In my experience, the team behind this product has been quick to respond and incredibly helpful. It's reassuring to know that they stand firmly behind their product.",
    },
    {
        avatar: <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />,
        name: 'Cindy Baker',
        occupation: 'CTO',
        testimonial:
            'The level of simplicity and user-friendliness in this product has significantly simplified my life. I appreciate the creators for delivering a solution that not only meets but exceeds user expectations.',
    }
];

const Testimonials = () => {
    return (
        <Container
            id="testimonials"
            sx={{
                pt: { xs: 4, sm: 1 },
                pb: { xs: 8, sm: 16 },
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: { xs: 3, sm: 6 },
            }}
        >
            <Box
                sx={{
                    width: { sm: '100%', md: '60%' },
                    textAlign: { sm: 'left', md: 'center' },
                }}
            >
                <Typography variant="h4" component="h1" fontWeight={600}>
                    Testimonials
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    See what our customers love about our products. Discover how we excel in
                    efficiency, durability, and satisfaction. Join us for quality, innovation,
                    and reliable support.
                </Typography>
            </Box>
            <Grid container spacing={2}>
                {userTestimonials.map((testimonial, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
                        <Card
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                flexGrow: 1,
                                p: 1,
                            }}
                        >
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {testimonial.testimonial}
                                </Typography>
                            </CardContent>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    pr: 2,
                                }}
                            >
                                <CardHeader
                                    avatar={testimonial.avatar}
                                    title={testimonial.name}
                                    subheader={testimonial.occupation}
                                />
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Testimonials;