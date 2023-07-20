import { SHOW } from '../assets/constants'
import Loader from '../components/Loader/Loader'
import Error from '../components/Error/Error'
import { useGetAllShowsQuery } from '../redux/services/netlify'
import MainLanding from '../components/MainLanding/MainLanding'
import Favorites from '../components/Favorites/Favorites'
import { Stack } from '@mui/material'

const LandingPage = () => {
    const { data, isFetching, error } = useGetAllShowsQuery([])

    if (isFetching) return <Loader />
    if (error) return <Error />
    console.log(data)
    const allShows: SHOW[] = data

    return (
        <>
            {/* className="landingPage" */}
            <Stack direction={'row'} spacing={2} 
                justifyContent="space-between" m={3}>
                <MainLanding allShows={allShows}/>
                <Favorites />
            </Stack>
        </>
    )
}

export default LandingPage