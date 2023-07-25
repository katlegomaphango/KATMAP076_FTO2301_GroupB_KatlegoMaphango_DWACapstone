import { Box, Card, CardContent, Checkbox, IconButton, Typography, styled } from "@mui/material"
import { EPISODE, SEASON, SHOW } from "../../assets/constants"
import { Favorite, FavoriteBorder, PlayArrow, Share } from "@mui/icons-material"
import PlayPause from "../PlayPause/PlayPause"
import { playPause, setActiveEpisode } from "../../redux/features/playerSlice"
import { useDispatch } from "react-redux"
import { supabase } from "../../lib/supabaseApi"

const MyCard = styled(Card)({
    background: `
        linear-gradient(-135deg, 
            var(--clr-dark-dark),
            var(--clr-dark-gray))
    `,
    width: 350,
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
}

const EpisodeTile = (props: PROPS) => {
    const { episode, show, isPlaying, activeEpisode, SeasonData, index } = props

    const dispatch = useDispatch()

    // const theme = useTheme()

    const seasonTxt = episode.episode.toString().length !== 1 ? `S${episode.episode}` : `SO${episode.episode}`

    const handlePauseClick = () => {
        dispatch(playPause(false))
    }

    const handlePlayClick = () => {
        dispatch(setActiveEpisode({ episode, SeasonData, index}))
        dispatch(playPause(true))
    }

    const handleLiked = async () => {
        const { error } = await supabase
        .from('favorites')
        .insert({ 
            created_at: new Date(),
            show_id: show.id,
            season_id: SeasonData.season,
            episode_id: episode.episode,
            description: episode.description,
            file: episode.file,
            title: episode.title,
            liked: true,
        })
        if(error) throw error
        console.log('liked ep')
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
                            <IconButton aria-label="add to favorites" onClick={() => handleLiked()}>
                                <Checkbox color="success" icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
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