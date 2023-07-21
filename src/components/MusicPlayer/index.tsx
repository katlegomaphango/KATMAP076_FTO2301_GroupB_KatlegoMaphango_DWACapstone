

import { useSelector, useDispatch } from "react-redux";
import Controls from "./Controls";
import { useEffect, useState } from "react";
import { playPause } from "../../redux/features/playerSlice";
import { Box, styled } from "@mui/material";

const StyledBox = styled(Box)({
    position: 'relative',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
})
const InnerBox = styled(Box)({
    display: 'flex',
    flex: '1',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
})

const MusicPlayer = () => {
    const { activeEpisode, currentSeasonEpisodes, currentIndex, isActive, isPlaying } = useSelector((state: any) => state.player)
    const dispatch = useDispatch()

    const [repeat, setRepeat] = useState(false)
    const [shuffle, setShuffle] = useState(false)

    useEffect(() => {
        if (currentSeasonEpisodes.length)  dispatch(playPause(true))
    }, [currentIndex])

    const handlePrevEpisode = () => {

    }

    const handlePlayPause = () => {
        
    }

    const handleNextEpisode = () => {
        
    }

    return (
        <>
            <StyledBox sx={{ px: { xs: 12, sm: 8}}} >
                {/* track */}
                <InnerBox>
                    <Controls
                        currentSeasonEpisodes={currentSeasonEpisodes}
                        handleNextEpisode={handleNextEpisode}
                        handlePlayPause={handlePlayPause}
                        handlePrevEpisode={handlePrevEpisode}
                        isPlaying={isPlaying}
                        repeat={repeat}
                        setRepeat={setRepeat}
                        setShuffle={setShuffle}
                        shuffle={shuffle}
                    />
                </InnerBox>
            </StyledBox>
        </>
    )
}

export default MusicPlayer