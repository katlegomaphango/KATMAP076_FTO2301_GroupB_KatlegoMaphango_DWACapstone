import { SHOW } from '../assets/constants'
import Loader from '../components/Loader/Loader'
import { useGetAllShowsQuery } from '../redux/services/netlify'

const LandingPage = () => {
    const { data, isFetching, error } = useGetAllShowsQuery([])

    if (isFetching) return <Loader />
    
    console.log(data)
    const allShows: SHOW[] = data

    return (
        <>
            <div className="landingPage">Landing Page</div>
        </>
    )
}

export default LandingPage