import { SHOW } from '../assets/constants'
import Loader from '../components/Loader/Loader'
import Error from '../components/Error/Error'
import { useGetAllShowsQuery } from '../redux/services/netlify'

const LandingPage = () => {
    const { data, isFetching, error } = useGetAllShowsQuery([])

    if (isFetching) return <Loader />
    if (error) return <Error />
    console.log(data)
    const allShows: SHOW[] = data

    return (
        <>
            <div className="landingPage">Landing Page</div>
        </>
    )
}

export default LandingPage