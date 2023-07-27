import { Box, Card, CardContent, Checkbox, IconButton, Typography, styled } from "@mui/material"
import { EPISODE, SEASON, SHOW, TOKEN } from "../../assets/constants"
import { Favorite, FavoriteBorder, PlayArrow, Share } from "@mui/icons-material"
import PlayPause from "../PlayPause/PlayPause"
import { playPause, setActiveEpisode } from "../../redux/features/playerSlice"
import { useDispatch } from "react-redux"
import { supabase } from "../../lib/supabaseApi"
import { useEffect, useState } from "react"
import { AddToLikedEpisodes, removeEpisode } from "../../redux/features/favoriteSlice"
import { useSelector } from "react-redux"

const MyCard = styled(Card)({
    background: `
        linear-gradient(-135deg, 
            var(--clr-dark-dark),
            var(--clr-dark-gray))
    `,
    maxWidth: 350,
    minWidth: 300,
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
    show: SHOW,
    index: number,
    isPlaying: boolean,
    activeEpisode: EPISODE,
    SeasonData: SEASON,
    token: TOKEN,
    user: any,
}

type FAV = {
    created_at?: string
    description: string
    episode_id: number
    file: string
    id?: string
    season_id: number
    show_id: number
    title: string
    user_id: string
}

const EpisodeTile = (props: PROPS) => {
    const { episode, show, isPlaying, activeEpisode, SeasonData, index, token, user } = props
    const { likedEpisodes } = useSelector((state: any) => state.favorite)

    const dispatch = useDispatch()

    const seasonTxt = episode.episode.toString().length !== 1 ? `S${episode.episode}` : `SO${episode.episode}`

    const handlePauseClick = () => {
        dispatch(playPause(false))
    }

    const handlePlayClick = () => {
        dispatch(setActiveEpisode({ episode, SeasonData, index}))
        dispatch(playPause(true))
    }

    const handleLiked = async (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        if(checked) {
            const liked: FAV = {
                description: episode.description,
                episode_id: episode.episode,
                file: episode.file,
                season_id: SeasonData.season,
                show_id: show.id,
                title: episode.title,
                user_id: user.id
            }

            

            dispatch(AddToLikedEpisodes(liked))
        } else {
            const liked: FAV = {
                description: episode.description,
                episode_id: episode.episode,
                file: episode.file,
                season_id: SeasonData.season,
                show_id: show.id,
                title: episode.title,
                user_id: user.id
            }
            console.log(likedEpisodes.indexOf(liked))
            const userId = user.id
            const epId = episode.episode
            dispatch(removeEpisode({userId, epId, liked}))
        }

    }

    return (
        <>
            <MyCard>
                <Box>
                    <CardContent sx={{flex: '1 0 auto'}}>
                        <EpTitle variant="h5">
                            {episode.title}
                        </EpTitle>
                        <ShowName variant="subtitle1" color='text.secondary'>
                            {show.title}
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
                                <Checkbox color="success" icon={<FavoriteBorder />} checkedIcon={<Favorite />} onChange={(e, checked) => handleLiked(e, checked)} />
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