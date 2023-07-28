import { PREVIEW } from '../assets/constants'
import Loader from '../components/Loader/Loader'
import Error from '../components/Error/Error'
import { useGetAllShowsQuery } from '../redux/services/netlify'
import MainLanding from '../components/MainLanding/MainLanding'
import { Box } from '@mui/material'

const HomeContent = () => {
    const { data, isFetching, error } = useGetAllShowsQuery([])

    if (isFetching) return <Loader />
    if (error) return <Error />
    const allShows: PREVIEW[] = data

    return (
        <>
            <Box>
                <MainLanding allShows={allShows}/>
            </Box>
        </>
    )
}

export default HomeContent