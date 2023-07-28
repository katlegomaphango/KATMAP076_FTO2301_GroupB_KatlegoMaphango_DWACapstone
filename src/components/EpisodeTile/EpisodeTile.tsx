import { Box, Card, CardContent, Checkbox, IconButton, Typography, styled } from "@mui/material"
import { EPISODE, User } from "../../assets/constants"
import { Favorite, FavoriteBorder, Share } from "@mui/icons-material"
import PlayPause from "../PlayPause/PlayPause"
import { playPause, setActiveEpisode } from "../../redux/features/playerSlice"
import { useDispatch } from "react-redux"
import { supabase } from "../../lib/supabaseApi"
import { useEffect } from "react"
import { AddToLikedEpisodes, likeDislike, removeEpisode } from "../../redux/features/favoriteSlice"
import { useSelector } from "react-redux"

const MyCard = styled(Card)({
    background: `
        linear-gradient(-135deg, 
            var(--clr-dark-dark),
            var(--clr-dark-gray))
    `,
    maxWidth: 300,
    minWidth: 200,
    height: 195
})
const EpTitle = styled(Typography)({
    lineHeight: '1.5rem',
    height: '3rem',
    overflow: 'hidden'
})
const ShowName = styled(Typography)({
    width: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
})

type PROPS = { 
    episode: EPISODE,
    showTitle: string,
    isPlaying: boolean,
    activeEpisode: EPISODE,
    user: User,
    isliked: boolean
}

const EpisodeTile = (props: PROPS) => {
    const { episode, showTitle, isPlaying, activeEpisode, isliked, user } = props
    const { likedEpisodes, likedEp } = useSelector((state: any) => state.favorite)

    useEffect(() => {
        console.log(likedEpisodes.includes({episode, showTitle}))
        console.log(episode, showTitle)
    }, [])

    const dispatch = useDispatch()

    const seasonTxt = episode.episode.toString().length !== 1 ? `S${episode.episode}` : `SO${episode.episode}`

    const handlePauseClick = () => {
        dispatch(playPause(false))
    }

    const handlePlayClick = () => {
        dispatch(setActiveEpisode(episode))
        dispatch(playPause(true))
    }

    const handleLiked = async (_event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        if(checked) {
            const {data, error}: { data: any, error: any } = await supabase
            .from('favorites')
            .insert({ 
                created_at: new Date(), 
                description: episode.episode,
                episode_id: episode.episode,
                file: episode.file,
                showTitle,
                title: episode.title,
                user_id: user.id
            })

            if(error) throw error
            console.log(data)

            dispatch(AddToLikedEpisodes({episode, showTitle}))
            dispatch(likeDislike(true))
        } else {
            const { error } = await supabase
            .from('favorites')
            .delete()
            .eq('title', episode.title)
            if(error) throw error
            console.log(likedEpisodes.includes({episode, showTitle}))
            dispatch(likeDislike(true))
            dispatch(removeEpisode({episode, showTitle}))
        }
    }

    return (
        <>
            <MyCard sx={{maxWidth: {xs: 300, sm: 350}}}>
                <Box>
                    <CardContent sx={{flex: '1 0 auto'}}>
                        <EpTitle variant="h5">
                            {episode.title}
                        </EpTitle>
                        <ShowName variant="subtitle1" color='text.secondary'>
                            {showTitle}
                        </ShowName>
                        <Typography variant="subtitle1" color='text.secondary' component='div'>
                            {seasonTxt} | {`EP${episode.episode}`}
                        </Typography>
                    </CardContent>
                    <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Box sx={{display: 'flex', alignItems: 'center', pl: 1, pb: 1}}>
                            {/* <IconButton aria-label="previous">
                                {theme.direction === 'rtl' ? <SkipNext /> : <SkipPrevious />}
                            </IconButton> */}
                            <PlayPause episode={episode} 
                                handlePause={handlePauseClick} 
                                handlePlay={handlePlayClick}
                                isPlaying={isPlaying}
                                activeEpisode={activeEpisode}
                                    />
                            {/* <IconButton aria-label="next">
                                {theme.direction === 'rtl' ? <SkipPrevious /> : <SkipNext />}
                            </IconButton> */}
                        </Box>
                        <Box sx={{pr: 2}}>
                            <IconButton aria-label="add to favorites">
                                <Checkbox color="success" icon={<FavoriteBorder />} checked={isliked && likedEp.title === episode.title } checkedIcon={<Favorite />} onChange={(e, checked) => handleLiked(e, checked)} />
                            </IconButton>
                            <IconButton aria-label="share">
                                <Share />
                            </IconButton>
                        </Box>
                    </Box>

                </Box>
            </MyCard>
        </>
    )
}

export default EpisodeTile