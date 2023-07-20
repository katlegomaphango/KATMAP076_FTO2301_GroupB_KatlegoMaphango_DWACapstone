import { Box, Card, CardContent, Checkbox, IconButton, Typography, styled, useTheme } from "@mui/material"
import { EPISODE } from "../../assets/constants"
import { Favorite, FavoriteBorder, PlayArrow, Share, SkipNext, SkipPrevious, Pause } from "@mui/icons-material"
import { useSelector, useDispatch } from "react-redux"

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
    show: string,
    index: number,
}

const EpisodeTile = (props: PROPS) => {
    const { episode, show } = props

    const dispatch = useDispatch()
    const { activeEpisode, isPlaying } = useSelector((state) => state.player)

    const theme = useTheme()

    const seasonTxt = episode.episode.toString().length !== 1 ? `S${episode.episode}` : `SO${episode.episode}`

    return (
        <>
            <MyCard>
                <Box>
                    <CardContent sx={{flex: '1 0 auto'}}>
                        <EpTitle variant="h5">
                            {episode.title}
                        </EpTitle>
                        <ShowName variant="subtitle1" color='text.secondary'>
                            {show}
                        </ShowName>
                        <Typography variant="subtitle1" color='text.secondary' component='div'>
                            {seasonTxt} | {`EP${episode.episode}`}
                        </Typography>
                    </CardContent>
                    <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Box sx={{display: 'flex', alignItems: 'center', pl: 1, pb: 1}}>
                            <IconButton aria-label="previous">
                                {theme.direction === 'rtl' ? <SkipNext /> : <SkipPrevious />}
                            </IconButton>
                            <IconButton aria-label="play/pause">
                                <PlayArrow sx={{height: 38, width: 38}} />
                            </IconButton>
                            <IconButton aria-label="next">
                                {theme.direction === 'rtl' ? <SkipPrevious /> : <SkipNext />}
                            </IconButton>
                        </Box>
                        <Box sx={{pr: 2}}>
                            <IconButton aria-label="add to favorites">
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