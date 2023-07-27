import { useEffect, useRef } from "react"
import { EPISODE } from "../../assets/constants"

type PROPS = { 
    activeEpisode: EPISODE, 
    isPlaying: boolean, 
    volume: number, 
    seekTime: number, 
    onTimeUpdate: React.ReactEventHandler<HTMLAudioElement> | undefined, 
    onLoadedData: React.ReactEventHandler<HTMLAudioElement> | undefined, 
}

const Player = (props: PROPS) => {
    const { activeEpisode, isPlaying, volume, seekTime, onTimeUpdate, onLoadedData } = props

    const ref = useRef<HTMLAudioElement>(null)

    if(ref.current) {
        if(isPlaying) {
            ref.current.play()
        } else {
            ref.current.pause()
        }
    }

    useEffect(() => {
        if (!ref.current) return
        ref.current.volume = volume
    }, [volume])

    useEffect(() => {
        if (!ref.current) return
        ref.current.currentTime = seekTime
    }, [seekTime])

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