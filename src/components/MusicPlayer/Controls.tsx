import { Box, IconButton, styled } from "@mui/material"
import { EPISODE } from "../../assets/constants"
import { Pause, PlayArrow, Repeat, Shuffle, SkipNext, SkipPrevious } from "@mui/icons-material"

const StyledBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '50%',
    background: 'blue',
})

type PROPS = { 
    isPlaying: boolean, 
    currentSeasonEpisodes: EPISODE[], 
    handlePlayPause: () => void, 
    handlePrevEpisode: () => void, 
    handleNextEpisode: () => void,
}

const Controls = (props: PROPS) => {
    const { isPlaying, currentSeasonEpisodes, handlePlayPause, handlePrevEpisode, handleNextEpisode } = props
    return (
        <>
            <StyledBox>
                {
                    currentSeasonEpisodes?.length && 
                    <IconButton onClick={handlePrevEpisode} sx={{width: 38}}>
                        <SkipPrevious />
                    </IconButton>
                }
                <IconButton onClick={handlePlayPause} sx={{width: 38}}>
                    {
                        isPlaying ? 
                            <Pause />
                        :
                            <PlayArrow />
                    }
                </IconButton>
                {
                    currentSeasonEpisodes?.length && 
                    <IconButton onClick={handleNextEpisode} sx={{width: 38}}>
                        <SkipNext />
                    </IconButton>
                }
            </StyledBox>
        </>
    )
}

export default Controls