import { Box, IconButton, styled } from "@mui/material"
import { Pause, PlayArrow, } from "@mui/icons-material"

const StyledBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '50%',
})

type PROPS = { 
    isPlaying: boolean, 
    handlePlayPause: () => void, 
}

const Controls = (props: PROPS) => {
    const { isPlaying, handlePlayPause } = props
    return (
        <>
            <StyledBox>
                <IconButton onClick={handlePlayPause} sx={{width: 38}}>
                    {
                        isPlaying ? 
                            <Pause />
                        :
                            <PlayArrow />
                    }
                </IconButton>
            </StyledBox>
        </>
    )
}

export default Controls