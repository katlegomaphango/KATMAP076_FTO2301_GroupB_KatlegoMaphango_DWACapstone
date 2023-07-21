

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { nextEpisode, playPause, prevEpisode } from "../../redux/features/playerSlice";
import { Box, styled } from "@mui/material";
import Controls from "./Controls";
import Player from "./Player";
import Track from "./Track";
import Seekbar from "./Seekbar";

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
        } else 
        {
            dispatch(prevEpisode(currentIndex - 1))
        }
        dispatch(prevEpisode('pressed'))
    }

    const handlePlayPause = () => {
        if (!isActive) return

        if (isPlaying) dispatch(playPause(false))
        if (!isPlaying) dispatch(playPause(true))
    }

    const handleNextEpisode = () => {
        dispatch(playPause(false)) 

        dispatch(nextEpisode(Math.floor(Math.random() * currentSeasonEpisodes.length)))
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
                <Track activeEpisode={activeEpisode} />
                <InnerBox>
                    <Controls
                        currentSeasonEpisodes={currentSeasonEpisodes}
                        handleNextEpisode={handleNextEpisode}
                        handlePlayPause={handlePlayPause}
                        handlePrevEpisode={handlePrevEpisode}
                        isPlaying={isPlaying}
                    />
                    <Seekbar 
                        appTime={appTime}
                        max={duration}
                        min={0}
                        onInput={(event: any) => setSeekTime(event.target.value)}
                        setSeekTime={setSeekTime}
                        value={appTime}
                    />
                    <Player
                        activeEpisode={activeEpisode}
                        isPlaying={isPlaying}
                        onEnded={handleNextEpisode}
                        onLoadedData={(event: React.SyntheticEvent<HTMLAudioElement, Event>) => handleOnloadedData(event)}
                        onTimeUpdate={(event: React.SyntheticEvent<HTMLAudioElement, Event>) => handleOnTimeUpdate(event)}
                        seekTime={seekTime}
                        volume={volume}
                    />
                </InnerBox>
            </StyledBox>
        </>
    )
}

export default MusicPlayer