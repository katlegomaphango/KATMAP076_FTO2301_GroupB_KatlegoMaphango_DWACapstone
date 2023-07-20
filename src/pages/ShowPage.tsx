import { useParams } from "react-router-dom"
import { Box } from "@mui/material"
import { theme } from "../theme"
import { useGetShowInfoQuery } from "../redux/services/netlify"
import Loader from "../components/Loader/Loader"
import Error from "../components/Error/Error"
import { SHOW } from "../assets/constants"



const ShowPage = () => {
    const { id } = useParams()
    const { data, isFetching, error} = useGetShowInfoQuery(id)

    if (isFetching) return <Loader />
    if (error) return <Error />

    const ShowData: SHOW = data
    console.log(ShowData)

    return (
        <>
            <Box bgcolor={theme.palette.primary.dark} flex={3} p={2}>
                
                ShowPage {ShowData.title}
            </Box>
        </>
    )
}

export default ShowPage