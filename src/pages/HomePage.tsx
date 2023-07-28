import { Box, styled } from "@mui/material"
import HomeContent from "./LandingPage"
import Favorites from "../components/Favorites/Favorites"


const MainBox = styled(Box)({
    display: 'grid',
    gridTemplateColumns: '68% 30%',
    gap: '2%',
    margin: 20,
})

const HomeLayout = () => {

    return (
        <>
            <button>fav</button>
            <MainBox sx={{display: {xs: 'block', sm: 'block', md: 'grid'}}}>
                <HomeContent />
                <Favorites />
            </MainBox>
        </>
    )
}

export default HomeLayout