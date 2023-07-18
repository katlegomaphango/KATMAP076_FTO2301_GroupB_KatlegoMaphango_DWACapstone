import { SHOW } from '../assets/constants'
import { useGetAllShowsQuery } from '../redux/services/netlify'

const LandingPage = () => {
    const { data, isFetching, error } = useGetAllShowsQuery([])

    console.log(data)
    const allShows: SHOW[] = data

    return (
        <>
            <div className="landingPage">Landing Page</div>
        </>
    )
}

export default LandingPage