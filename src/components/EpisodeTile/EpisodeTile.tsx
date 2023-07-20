import { EPISODE } from "../../assets/constants"


type PROPS = { 
    episode: EPISODE
}

const EpisodeTile = (props: PROPS) => {
    const { episode } = props
    return (
        <>
            <div>{episode.title}</div>
        </>
    )
}

export default EpisodeTile