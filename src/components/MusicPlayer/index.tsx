

import { useSelector, useDispatch } from "react-redux";
import Controls from "./Controls";
import { useEffect, useState } from "react";
import { nextEpisode, playPause, prevEpisode } from "../../redux/features/playerSlice";
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
        if (currentIndex === 0) {
            dispatch(prevEpisode(currentSeasonEpisodes.length - 1))
        } else if (shuffle) {
            dispatch(prevEpisode(Math.floor(Math.random() * currentSeasonEpisodes.length)))
        } else {
            dispatch(prevEpisode(currentIndex - 1))
        }
    }

    const handlePlayPause = () => {
        if (!isActive) return

        if (isPlaying) dispatch(playPause(false))
        if (!isPlaying) dispatch(playPause(true))
    }

    const handleNextEpisode = () => {
        dispatch(playPause(false)) 

        if(!shuffle) {
            dispatch(nextEpisode((currentIndex + 1) % currentSeasonEpisodes.length))
        } else {
            dispatch(nextEpisode(Math.floor(Math.random() * currentSeasonEpisodes.length)))
        }
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