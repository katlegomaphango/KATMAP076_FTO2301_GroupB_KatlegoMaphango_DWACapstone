import { Box, Paper, styled } from "@mui/material"
import { EPISODE } from "../../assets/constants"

type PROPS = { 
    isPlaying: boolean, 
    isActive: boolean, 
    activeEpisode: EPISODE
}

const TrackBox = styled(Box)({
    display: 'flex',
    flex: '1',
    alignItems: 'center',
    justifyContent: 'flex-start',
})

const TrackDetails = styled(Paper)({
    width: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
})

const Track = (props: PROPS) => {
    const { isPlaying, isActive, activeEpisode } = props

    return (
        <>
            <TrackBox>
                <Box sx={{display: { xs: 'none', sm: 'block'}, height: 16, width: 16, mr: 4}}>
                    img cont
                </Box>
                <Box sx={{width: '50%'}}>
                    <TrackDetails color="primary">
                        {activeEpisode?.title ? activeEpisode?.title : 'No active episode'}
                    </TrackDetails>
                    <TrackDetails color="secondary">
                        {activeEpisode?.description ? activeEpisode?.description : 'No active episode'}
                    </TrackDetails>
                </Box>
            </TrackBox>
        </>
    )
}

export default Track