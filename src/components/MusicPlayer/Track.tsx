import { Box, Paper, styled } from "@mui/material"
import { EPISODE } from "../../assets/constants"
import { theme } from "../../theme"

type PROPS = { 
    activeEpisode: EPISODE
}

const TrackBox = styled(Box)({
    display: 'flex',
    flex: '1',
    alignItems: 'center',
    justifyContent: 'flex-start',
})

const TrackDetails = styled(Paper)({
    width: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    padding: 18,
    fontWeight: 'bold',
    fontSize: '1.2rem',
    color: theme.palette.secondary.light,
    background: `
    linear-gradient(-135deg, 
        var(--clr-dark-dark),
        var(--clr-dark-gray))
    `,
})

const Track = (props: PROPS) => {
    const { activeEpisode } = props

    return (
        <>
            <TrackBox>
                <TrackDetails color="secondary">
                    {activeEpisode?.title ? activeEpisode?.title : 'No active episode'}
                </TrackDetails>
            </TrackBox>
        </>
    )
}

export default Track