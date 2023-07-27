import { useNavigate, useParams } from "react-router-dom"
import { Box, Button, Paper, Tab, Tabs, Typography, styled } from "@mui/material"
import { theme } from "../theme"
import { useGetShowInfoQuery } from "../redux/services/netlify"
import Loader from "../components/Loader/Loader"
import Error from "../components/Error/Error"
import { EPISODE, SEASON, SHOW, TOKEN, User } from "../assets/constants"
import { ArrowBack } from "@mui/icons-material"
import { useEffect, useState } from "react"
import EpisodeTile from "../components/EpisodeTile/EpisodeTile"
import { useSelector } from "react-redux"
import Favorites from "../components/Favorites/Favorites"
import { supabase } from "../lib/supabaseApi"

const ShowHeader = styled(Paper)({
    height: '20rem',
    background: `
        linear-gradient(-135deg, 
            var(--clr-dark-dark),
            var(--clr-dark-gray))
    `,
    display: 'flex',
    gap: '1rem',
    padding: '1rem',
    borderRadius: '0.5rem'
})

const ShowBody = styled(Paper)({
    background: `
        linear-gradient(135deg, 
            var(--clr-dark-dark),
            var(--clr-dark-gray))
    `,
    marginTop: '1rem'
})

const ImageBox = styled(Box)({
    width: '19.8rem',
})

const ShowTitle = styled(Typography)({
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginRight: '1rem',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
})

const ShowDesc = styled(Typography)({
    overflow: 'hidden',
})

type TabPanelProps = {
    index: number,
    value: number,
    episode: EPISODE,
    show: SHOW,
    isPlaying: boolean,
    activeEpisode: EPISODE,
    SeasonData: SEASON,
    token: TOKEN,
    user: any
}

const MainBox = styled(Box)({
    display: 'grid',
    gridTemplateColumns: '68% 30%',
    gap: '2%',
    margin: 20,
})

type PROPS = {
    token: TOKEN,
}

const CustomTabPanel = (props: TabPanelProps) => {
    const { index, value, episode, show, isPlaying, activeEpisode, SeasonData, token, user } = props

    return (
        <>
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`${index}`}
            >
                <Box>
                    {value === index && <EpisodeTile episode={episode} show={show} index={index} isPlaying={isPlaying} activeEpisode={activeEpisode} SeasonData={SeasonData} token={token} user={user} />}
                    
                </Box>
            </div>
        </>
    )
}

const ShowPage = (props: PROPS) => {
    useEffect(() => {
        supabase.auth.onAuthStateChange((event, session) => {
            if(event !== 'SIGNED_OUT') {
                setUser(session?.user)
            }
        })
    }, [])

    const { token } = props
    const [tabValue, setTabValue] = useState(0)
    const [user, setUser] = useState<User | any>(token.user)
    const navigate = useNavigate()
    const { id } = useParams()
    const { data, isFetching, error} = useGetShowInfoQuery(id)

    const { activeEpisode, isPlaying } = useSelector((state: any) => state.player)

    if (isFetching) return <Loader />
    if (error) return <Error />

    const ShowData: SHOW = data
    const SeasonsData: SEASON[] = ShowData.seasons

    const handleTabChange = (e: any, newValue: number) => {
        setTabValue(newValue)
    }



    console.log(ShowData)

    return (
        <MainBox>
            <Box bgcolor={theme.palette.primary.dark}>
                <Box>
                    <ShowHeader variant="outlined" square >
                        <ImageBox>
                            <img width={'100%'} src={ShowData.image} alt="" />
                        </ImageBox>
                        <Box sx={{display: 'flex', flexDirection: 'column', width: '100%', gap: '1rem' }}>
                            <Button onClick={() => navigate(-1)} variant="contained" size="large" sx={{alignSelf: "flex-end"}}>
                                <ArrowBack />
                                Back
                            </Button>
                            <ShowTitle variant="h3">
                                {ShowData.title}
                            </ShowTitle>
                            <ShowDesc>
                                {ShowData.description}
                            </ShowDesc>
                        </Box>
                    </ShowHeader>
                    <ShowBody>
                        <Box>
                            <Tabs value={tabValue}
                                variant="scrollable"
                                scrollButtons="auto"
                                aria-label="scrollable auto tabs"
                                onChange={(e: any, value: number) => handleTabChange(e, value)}
                                textColor="secondary"
                                indicatorColor="secondary"
                            >
                                {SeasonsData.map((item) => (
                                    <Tab key={item.season}
                                        label={item.title}
                                    />
                                ))}
                            </Tabs>
                        </Box>
                        <Box sx={{backgroundColor: 'red', display: 'flex', flexWrap: 'wrap', 
                    gap: 2, pt: 2, pb: 2}}>
                            {SeasonsData.map((item) => (
                                <Box key={item.season} >
                                    {item.episodes.map((se, i) => (
                                        <CustomTabPanel
                                            value={tabValue}
                                            key={se.episode}
                                            index={i}
                                            episode={se}
                                            show={ShowData}
                                            isPlaying={isPlaying}
                                            activeEpisode={activeEpisode}
                                            SeasonData={item}
                                            token={token}
                                            user={user}
                                        />
                                    ))}
                                </Box>
                            ))}
                        </Box>
                    </ShowBody>
                </Box>
                
            </Box>
            <Favorites data={ShowData} token={token} />
        </MainBox>
    )
}

export default ShowPage