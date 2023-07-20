import { PREVIEW } from '../assets/constants'
import Loader from '../components/Loader/Loader'
import Error from '../components/Error/Error'
import { useGetAllShowsQuery } from '../redux/services/netlify'
import MainLanding from '../components/MainLanding/MainLanding'
import Favorites from '../components/Favorites/Favorites'
import { Stack } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import ShowPage from './ShowPage'

const LandingPage = () => {
    const { data, isFetching, error } = useGetAllShowsQuery([])

    if (isFetching) return <Loader />
    if (error) return <Error />
    console.log(data)
    const allShows: PREVIEW[] = data

    return (
        <>
            {/* className="landingPage" */}
            <Stack direction={'row'} spacing={2} 
                justifyContent="space-between" m={3}>
                <Routes>
                    <Route path='/' element={<MainLanding allShows={allShows}/>} />
                    <Route path='/show/:id' element={<ShowPage />} />
                </Routes>
                {/* <MainLanding allShows={allShows}/> */}
                <Favorites />
            </Stack>
        </>
    )
}

export default LandingPage