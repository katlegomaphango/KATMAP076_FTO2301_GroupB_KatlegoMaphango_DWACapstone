import { Box, styled } from "@mui/material"
import Favorites from "../components/Favorites/Favorites"
import { useGetAllShowsQuery } from "../redux/services/netlify"
import Loader from "../components/Loader/Loader"
import Error from "../components/Error/Error"
import { PREVIEW } from "../assets/constants"
import MainLanding from "../components/MainLanding/MainLanding"


const MainBox = styled(Box)({
    display: 'grid',
    gridTemplateColumns: '68% 30%',
    gap: '2%',
    margin: 20,
})

const HomeLayout = () => {
    const { data, isFetching, error } = useGetAllShowsQuery([])

    if (isFetching) return <Loader />
    if (error) return <Error />
    const allShows: PREVIEW[] = data

    return (
        <>
            <MainBox sx={{display: {xs: 'block', sm: 'block', md: 'grid'}}}>
                <MainLanding allShows={allShows}/>
                <Favorites />
            </MainBox>
        </>
    )
}

export default HomeLayout