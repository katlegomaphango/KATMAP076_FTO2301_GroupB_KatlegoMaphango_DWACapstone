import { useEffect, useRef } from "react"
import { EPISODE } from "../../assets/constants"

type PROPS = { 
    activeEpisode: EPISODE, 
    isPlaying: boolean, 
    volume: number, 
    seekTime: number, 
    onEnded:  React.ReactEventHandler<HTMLAudioElement> | undefined, 
    onTimeUpdate: React.ReactEventHandler<HTMLAudioElement> | undefined, 
    onLoadedData: React.ReactEventHandler<HTMLAudioElement> | undefined, 
    repeat: boolean
}

const Player = (props: PROPS) => {
    const { activeEpisode, isPlaying, volume, seekTime, onEnded, onTimeUpdate, onLoadedData, repeat } = props

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
                loop={repeat}
                onEnded={onEnded}
                onTimeUpdate={onTimeUpdate}
                onLoadedData={onLoadedData}
            />
        </>
    )
}

export default Player