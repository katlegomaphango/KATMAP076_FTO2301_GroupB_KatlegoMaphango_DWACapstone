import { Box } from '@mui/material'
import './Favorites.css'
import { theme } from '../../theme'
import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseApi'
import { Favorite } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { SetAllLikedEpisodes } from '../../redux/features/favoriteSlice'
import { useSelector } from 'react-redux'
import { User } from '../../assets/constants'
import EpisodeTile from '../EpisodeTile/EpisodeTile'

const Favorites = () => {
    const { token } = useSelector((state: any) => state.token)
    console.log(token)
    const [user, setUser] = useState<User | any>(token.user)
    const dispatch = useDispatch()
    useEffect(() => {
        supabase.auth.onAuthStateChange((event, session) => {
            if(event !== 'SIGNED_OUT') {
                setUser(session?.user)
            }
        })
    }, [])

    console.log(user)
    //let favData: any = []
    const { likedEpisodes, isliked } = useSelector((state: any) => state.favorite)
    const { activeEpisode, isPlaying } = useSelector((state: any) => state.player)
    //const dispatch = useDispatch()
    


    useEffect(()=>{        
        const fetchFavs =async () => {
            const { data, error } = await supabase
                .from('favorites')
                .select('description, episode_id, file, title, showTitle')
                .eq('user_id', user.id)
            if(error) throw error
            dispatch(SetAllLikedEpisodes(data.map((item) => ({
                showTitle: item.showTitle, 
                episode: {
                    file: item.file,
                    description: item.description,
                    episode: item.episode_id,
                    title: item.title
                }
            }))))
        }
        fetchFavs()
    },[likedEpisodes.length])

    console.log(user)
    console.log(likedEpisodes)

    return (
        <>
            <Box bgcolor={theme.palette.primary.dark}
                    sx={{display: {xs: 'none', sm: 'block'}, p: 2}}>
                <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                    <Box sx={{display: 'flex', alignItems: 'center', fontSize: 25}}>
                        Favorites <Favorite color='secondary' sx={{ml: 1}} />
                    </Box>
                    {likedEpisodes.length === 0 ? (
                            <h1>No favorites</h1>
                        ) : (
                            <>
                                {likedEpisodes.map((item: any) => {
                                    console.log(item)
                                        return (
                                            <EpisodeTile 
                                                activeEpisode={activeEpisode} 
                                                episode={item.episode} 
                                                isPlaying={isPlaying} 
                                                showTitle={item.showTitle}
                                                key={item.id}
                                                isliked={isliked}
                                                user={user}
                                            />
                                        )
                                })}
                            </>
                        )
                    }
                </Box>
                
            </Box>
        </>
    )
}

export default Favorites