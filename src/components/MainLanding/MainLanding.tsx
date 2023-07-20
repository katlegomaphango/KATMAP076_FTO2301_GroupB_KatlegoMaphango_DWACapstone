import { Box } from '@mui/material'
import { SHOW } from '../../assets/constants'
import './MainLanding.css'
import { theme } from '../../theme'

const Slider = () => {
    return (
        <>
            <div>Slider</div>
        </>
    )
}

type mainProps = {
    allShows: SHOW[]
}

const MainLanding = (mainProps: mainProps) => {
    const { allShows } = mainProps

    return (
        <>
            {/* className='mainLanding' */}
            <Box bgcolor={theme.palette.primary.dark} flex={3} p={2}>
                <Slider />

                <div className="main">
                    <div className="main-top">
                        <h2>Discover Shows</h2>
                        <div className="main-top_header">
                            {/* <SearchBar /> */}
                            <div>Search Bar here</div>
                            <select onChange={() => ({})} value={''} className='allShows-sort'>
                                <option value="">Sort By</option>
                                <option value="A-Z">A-Z</option>
                                <option value="Z-A">Z-A</option>
                                <option value="new">New</option>
                                <option value="old">Old</option>
                            </select>
                        </div>
                    </div>
                    <div className="main-body">
                        {`${allShows}`}
                    </div>
                </div>
            </Box>
        </>
    )
}

export default MainLanding