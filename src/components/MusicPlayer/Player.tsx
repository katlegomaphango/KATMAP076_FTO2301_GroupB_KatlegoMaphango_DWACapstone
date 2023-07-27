import { useRef } from "react"
import { EPISODE } from "../../assets/constants"

type PROPS = { 
    activeEpisode: EPISODE, 
    isPlaying: boolean,  
    onTimeUpdate: React.ReactEventHandler<HTMLAudioElement> | undefined, 
    onLoadedData: React.ReactEventHandler<HTMLAudioElement> | undefined, 
}

const Player = (props: PROPS) => {
    const { activeEpisode, isPlaying, onTimeUpdate, onLoadedData } = props

    const ref = useRef<HTMLAudioElement>(null)

    if(ref.current) {
        if(isPlaying) {
            ref.current.play()
        } else {
            ref.current.pause()
        }
    }

    return (
        <>
            <audio
                src={activeEpisode?.file}
                ref={ref}
                onTimeUpdate={onTimeUpdate}
                onLoadedData={onLoadedData}
            />
        </>
    )
}

export default Player