import React from 'react';
import { Card, CardContent, Typography, Stack, Link } from '@mui/material';

const Footer = () => {

    return (
        <>
            <Card component="footer" elevation={4} sx={{ mt: 'auto', borderRadius: 0, bgcolor: 'grey.100'}}>
                <CardContent sx={{ py: 4, px: { xs: 2, sm: 4, md: 8 }, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2, }}>
                    <Typography variant="body2" color="text.secondary" fontWeight={500}>
                        ©{new Date().getFullYear()} Created By <Typography variant='span' sx={{ fontWeight: 600 }}>Prakhar Verma</Typography>.
                    </Typography>

                    <Stack direction="row" spacing={4}>
                        <Link href="#" underline="hover" color="inherit" fontWeight={500}>
                            Privacy
                        </Link>
                        <Link href="#" underline="hover" color="inherit" fontWeight={500}>
                            Terms
                        </Link>
                        <Link href="#" underline="hover" color="inherit" fontWeight={500}>
                            Contact
                        </Link>
                    </Stack>
                </CardContent>
            </Card>
        </>
    )
}

export { Footer }
