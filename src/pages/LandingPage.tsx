import { PREVIEW } from '../assets/constants'
import Loader from '../components/Loader/Loader'
import Error from '../components/Error/Error'
import { useGetAllShowsQuery } from '../redux/services/netlify'
import MainLanding from '../components/MainLanding/MainLanding'
import Favorites from '../components/Favorites/Favorites'
import { Box, Stack, styled } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import ShowPage from './ShowPage'
import Navbar from '../components/Navbar/Navbar'

type PROPS = {
    token: {}
}

const MainBox = styled(Box)({
    display: 'grid',
    gridTemplateColumns: '68% 30%',
    gap: '2%',
    margin: 25,
})

const Home = (props: PROPS) => {
    const { token } = props
    const { data, isFetching, error } = useGetAllShowsQuery([])

    if (isFetching) return <Loader />
    if (error) return <Error />
    const allShows: PREVIEW[] = data

    return (
        <>
            <Navbar token={token} />
            <MainBox>
                <MainLanding allShows={allShows}/>
                <Favorites token={token} />
            </MainBox>
        </>
    )
}

export default Home