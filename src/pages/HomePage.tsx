import { Box, styled } from "@mui/material"
import HomeContent from "./LandingPage"
import Favorites from "../components/Favorites/Favorites"

type PROPS = {
    token: {}
}

const MainBox = styled(Box)({
    display: 'grid',
    gridTemplateColumns: '68% 30%',
    gap: '2%',
    margin: 20,
})

const HomeLayout = (props: PROPS) => {
    const {token} = props
    console.log(token)

    return (
        <>
            <MainBox>
                <HomeContent token={token} />
                <Favorites token={token} />
            </MainBox>
        </>
    )
}

export default HomeLayout