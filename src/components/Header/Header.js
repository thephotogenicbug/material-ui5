import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
const Header = () => {
    return (
        <Box sx={{minHeight:'85vh', background:'url(images/header.png)',backgroundPosition:'center', backgroundSize:'cover' }}>
            <Typography variant="h1">Header</Typography>
        </Box>
    )
}

export default Header
