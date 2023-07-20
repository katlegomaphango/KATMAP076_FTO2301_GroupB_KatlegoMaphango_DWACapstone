import { Box } from '@mui/material'
import './Favorites.css'
import { theme } from '../../theme'

const Favorites = () => {
    return (
        <>
            <Box bgcolor={theme.palette.primary.dark} flex={1} p={2}
                    sx={{display: {xs: 'none', sm: 'block'}}}>
                Favorites
            </Box>
        </>
    )
}

export default Favorites