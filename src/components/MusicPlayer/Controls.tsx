import { Box, IconButton, styled } from "@mui/material"
import { EPISODE } from "../../assets/constants"
import { Pause, PlayArrow, Repeat, Shuffle, SkipPrevious } from "@mui/icons-material"

const StyledBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '80%'
})

type PROPS = { 
    isPlaying: boolean, 
    repeat: boolean, 
    setRepeat: React.Dispatch<React.SetStateAction<boolean>>, 
    shuffle: boolean, 
    setShuffle: React.Dispatch<React.SetStateAction<boolean>>, 
    currentSeasonEpisodes: EPISODE[], 
    handlePlayPause: () => void, 
    handlePrevEpisode: () => void, 
    handleNextEpisode: () => void,
}

const Controls = (props: PROPS) => {
    const { isPlaying, repeat, setRepeat, shuffle, setShuffle, currentSeasonEpisodes, handlePlayPause, handlePrevEpisode, handleNextEpisode } = props
    return (
        <>
            <StyledBox>
                <IconButton color={repeat ? 'success' : 'primary'} onClick={() => setRepeat((prev) => !prev)} sx={{display: { xs: 'none', sm: 'block'}, width: 38}} >
                    <Repeat />
                </IconButton>
                {
                    currentSeasonEpisodes?.length && 
                    <IconButton onClick={() => handlePrevEpisode} sx={{width: 38}}>
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
                    <IconButton onClick={() => handleNextEpisode} sx={{width: 38}}>
                        <SkipPrevious />
                    </IconButton>
                }
                <IconButton color={shuffle ? 'success' : 'primary'} onClick={() => setShuffle((prev) => !prev)} sx={{display: { xs: 'none', sm: 'block'}, width: 38}} >
                    <Shuffle />
                </IconButton>
            </StyledBox>
        </>
    )
}

export default Controls