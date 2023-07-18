import { SHOW } from '../assets/constants'
import Loader from '../components/Loader/Loader'
import Error from '../components/Error/Error'
import { useGetAllShowsQuery } from '../redux/services/netlify'
import MainLanding from '../components/MainLanding/MainLanding'
import Favorites from '../components/Favorites/Favorites'

const LandingPage = () => {
    const { data, isFetching, error } = useGetAllShowsQuery([])

    if (isFetching) return <Loader />
    if (error) return <Error />
    console.log(data)
    const allShows: SHOW[] = data

    return (
        <>
            <div className="landingPage">
                <MainLanding allShows={allShows}/>
                <Favorites />
            </div>
        </>
    )
}

export default LandingPage