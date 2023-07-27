

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { playPause } from "../../redux/features/playerSlice";
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
    const { activeEpisode, isActive, isPlaying } = useSelector((state: any) => state.player)
    const dispatch = useDispatch()

    const [duration, setDuration] = useState(0)
    const [appTime, setAppTime] = useState(0)

    const handlePlayPause = () => {
        if (!isActive) return

        if (isPlaying) dispatch(playPause(false))
        if (!isPlaying) dispatch(playPause(true))
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
                        handlePlayPause={handlePlayPause}
                        isPlaying={isPlaying}
                    />
                    <Seekbar 
                        onInput={handleOnloadedData}
                        max={duration}
                        min={0}
                        value={appTime}
                    />
                    <Player
                        activeEpisode={activeEpisode}
                        isPlaying={isPlaying}
                        onLoadedData={(event: React.SyntheticEvent<HTMLAudioElement, Event>) => handleOnloadedData(event)}
                        onTimeUpdate={(event: React.SyntheticEvent<HTMLAudioElement, Event>) => handleOnTimeUpdate(event)}
                    />
                </InnerBox>
            </StyledBox>
        </>
    )
}

export default MusicPlayer