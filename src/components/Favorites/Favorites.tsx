import { Box } from '@mui/material'
import './Favorites.css'
import { theme } from '../../theme'
import { useEffect } from 'react'
import { supabase } from '../../lib/supabaseApi'
import { Favorite } from '@mui/icons-material'

type PROPS = {
    token: {}
}

const Favorites = (props: PROPS) => {
    let favData: any = []

    useEffect(()=>{
        const GetFavorites = async () => {
            const { data, error } = await supabase
            .from('favorites')
            .select()
            console.log(data)
            favData = data
        }
        GetFavorites()
    },[])

    console.log(favData)

    return (
        <>
            <Box bgcolor={theme.palette.primary.dark} flex={1} p={2}
                    sx={{display: {xs: 'none', sm: 'block'}}}>
                <Box>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        Favorites <Favorite color='secondary' sx={{ml: 1}} />
                    </Box>
                    {favData.length === 0 ? (
                            <h1>No favorites</h1>
                        ) : (
                            <h1>there are favorites</h1>
                        )
                    }
                </Box>
                
            </Box>
        </>
    )
}

export default Favorites