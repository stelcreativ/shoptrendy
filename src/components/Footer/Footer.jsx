import React from 'react'
import { Box, Typography } from '@mui/material'

const Footer = () => {
    return (

        <Box
            mt="20px"
            p="40px 10px"
            sx={{ backgroundColor: '#f5f5f5' }}
            display="flex"
        >
            <Box
                width="80%"
                margin="auto"
                display="flex"
                justifyContent="space-between"
                flexDirection={{ xs: 'column', sm: 'row' }}
                flexWrap="wrap"
                rowGap="30px"

            >
                <Box width={{ xs: '100%', sm: 'clamp(60%, 30%, 30%)' }}
                    display="flex"
                    flexDirection="column"
                    gap="10px"
                >
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        p="10px 10px"
                    >
                        TRENDS
                    </Typography>
                    <Typography
                        p="10px 10px"
                    >
                        Trending is more than following a change of perspective.
                        It is becoming the change. It is a discovery of a new version
                        of yourself that is revealed beautifully.
                    </Typography>
                </Box>
            </Box >

            <Box
                width={{ xs: '100%', sm: 'clamp(50%, 30%, 30%)' }}
                display="flex"
                flexDirection="column"
                gap="10px"
                cursor="pointer"
            >
                <Typography variant="h4" fontWeight="bold" p="10px 0px">
                    About Us</Typography>
                <Typography>Careers</Typography>
                <Typography>Our Stores</Typography>
                <Typography>Terms & Conditions</Typography>
                <Typography mb="30px">Privacy Policy</Typography>
            </Box>
            <Box
                width={{ xs: '100%', sm: 'clamp(50%, 30%, 30%)' }}
                display="flex"
                flexDirection="column"
                gap="10px"
                cursor="pointer"
            >
                <Typography variant="h4" fontWeight="bold" p="10px 0px">
                    Customer Care</Typography>
                <Typography>Contact US</Typography>
                <Typography>F.A.Q.</Typography>
                <Typography>Track Your Order</Typography>
                <Typography mb="30px">Return & Refunds</Typography>
            </Box>
        </Box>

    )
}

export default Footer