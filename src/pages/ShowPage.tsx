import { useParams } from "react-router-dom"
import { Box } from "@mui/material"
import { theme } from "../theme"
import { useGetShowInfoQuery } from "../redux/services/netlify"



const ShowPage = () => {
    const { id } = useParams()
    const { data, isFetching, error} = useGetShowInfoQuery(id)

    console.log(data)

    return (
        <>
            <Box bgcolor={theme.palette.primary.dark} flex={3} p={2}>
                ShowPage {id}
            </Box>
        </>
    )
}

export default ShowPage