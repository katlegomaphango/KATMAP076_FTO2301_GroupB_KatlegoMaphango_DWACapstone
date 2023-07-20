import { PlayArrow, Pause } from "@mui/icons-material"
import { EPISODE } from "../../assets/constants"
import { IconButton } from "@mui/material"


type PROPS = {
    isPlaying: boolean,
    activeEpisode: EPISODE,
    episode: EPISODE,
    handlePause: () => void,
    handlePlay: () => void
}

const PlayPause = (props: PROPS) => {
    const { activeEpisode, episode, handlePause, handlePlay, isPlaying } = props

    return (
        <>
            <div>
                {
                    isPlaying && activeEpisode.title === episode.title ? 
                        <IconButton aria-label="pause" onClick={handlePause}>
                            <Pause sx={{height: 38, width: 38}} />
                        </IconButton>
                    :
                        <IconButton aria-label="play" onClick={handlePlay}>
                            <PlayArrow sx={{height: 38, width: 38}} />
                        </IconButton>

                }
            </div>
        </>
    )
}

export default PlayPause