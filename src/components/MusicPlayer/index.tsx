

import { useSelector, useDispatch } from "react-redux";
import Controls from "./Controls";
import { useEffect, useState } from "react";
import { nextEpisode, playPause, prevEpisode } from "../../redux/features/playerSlice";
import { Box, styled } from "@mui/material";
import Player from "./Player";

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
    const [duration, setDuration] = useState(0)
    const [appTime, setAppTime] = useState(0)
    const [seekTime, setSeekTime] = useState(0)
    const [volume, setVolume] = useState(0.3)

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

    const handleOnloadedData = (event: React.SyntheticEvent<HTMLAudioElement, Event>) => {
        const target = event.target as HTMLAudioElement
        setDuration(target?.duration)
    }

    const handleOnTimeUpdate = (event: React.SyntheticEvent<HTMLAudioElement, Event>) => {
        const target = event.target as HTMLAudioElement
        setAppTime(target?.currentTime)
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
                    <Player
                        activeEpisode={activeEpisode}
                        isPlaying={isPlaying}
                        onEnded={handleNextEpisode}
                        onLoadedData={(event: React.SyntheticEvent<HTMLAudioElement, Event>) => handleOnloadedData(event)}
                        onTimeUpdate={(event: React.SyntheticEvent<HTMLAudioElement, Event>) => handleOnTimeUpdate(event)}
                        repeat={repeat}
                        seekTime={seekTime}
                        volume={volume}
                    />
                </InnerBox>
            </StyledBox>
        </>
    )
}

export default MusicPlayer