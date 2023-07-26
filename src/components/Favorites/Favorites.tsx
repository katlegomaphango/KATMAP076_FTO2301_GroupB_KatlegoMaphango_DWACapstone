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
    const {token} = props
    let favData: any = []
    const userID = "1f9ed4c6-6458-4782-ba2c-4284fc0e97cd"

    useEffect(()=>{
        const GetFavorites = async () => {
            const { data, error } = await supabase
            .from('favorites')
            .select()
            .eq('user_id', userID)
            console.log(data)
            favData = data
        }
        GetFavorites()
    },[])

    console.log(favData)

    return (
        <>
            <Box bgcolor={theme.palette.primary.dark}
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