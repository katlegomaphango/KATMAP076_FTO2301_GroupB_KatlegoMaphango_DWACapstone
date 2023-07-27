import { Box } from '@mui/material'
import './Favorites.css'
import { theme } from '../../theme'
import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseApi'
import { Favorite } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { SetAllLikedEpisodes } from '../../redux/features/favoriteSlice'
import { useSelector } from 'react-redux'
import { SHOW, TOKEN, User } from '../../assets/constants'
import EpisodeTile from '../EpisodeTile/EpisodeTile'
import { useGetShowInfoQuery } from '../../redux/services/netlify'
import { useFetcher } from 'react-router-dom'

type PROPS = {
    token: TOKEN
    data?: SHOW
}

const Favorites = (props: PROPS) => {
    useEffect(() => {
        supabase.auth.onAuthStateChange((event, session) => {
            if(event !== 'SIGNED_OUT') {
                setUser(session?.user)
            }
        })
    }, [])

    const {token, data} = props
    let favData: any = []
    const { likedEpisodes } = useSelector((state: any) => state.favorite)
    const { activeEpisode, isPlaying } = useSelector((state: any) => state.player)
    const dispatch = useDispatch()
    const [user, setUser] = useState<User | any>(token.user)
    
    // useEffect(() => {
    //     let { data, isFetching, error} = useGetShowInfoQuery(showID)
    //     data = data
    // }, [showID])
    // const id: string | undefined = undefined
    // const userID = "1f9ed4c6-6458-4782-ba2c-4284fc0e97cd"

    useEffect(()=>{
        const GetFavorites = async () => {
            const { data, error } = await supabase
            .from('favorites')
            .select()
            .eq('user_id', user.id)
            dispatch(SetAllLikedEpisodes(data ? data : []))
            console.log(data)
            favData = data
        }
        GetFavorites()
    },[])

    console.log(user)
    console.log(data)

    return (
        <>
            <Box bgcolor={theme.palette.primary.dark}
                    sx={{display: {xs: 'none', sm: 'block'}, p: 2}}>
                <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                    <Box sx={{display: 'flex', alignItems: 'center', fontSize: 25}}>
                        Favorites <Favorite color='secondary' sx={{ml: 1}} />
                    </Box>
                    {!data && likedEpisodes.length === 0 ? (
                            <h1>No favorites</h1>
                        ) : (
                            <>
                                {likedEpisodes.map((item: any, i: number) => {
                                        console.log(data)
                                        const SeasonData=data.seasons[item.season_id-1]
                                        const episode=data.seasons[item.season_id-1].episodes[item.episode_id-1]

                                        return (
                                            <EpisodeTile 
                                                token={token} 
                                                SeasonData={SeasonData} 
                                                activeEpisode={activeEpisode} 
                                                episode={episode} 
                                                index={i} 
                                                isPlaying={isPlaying} 
                                                show={data}
                                                user={user}
                                                key={item.id}
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