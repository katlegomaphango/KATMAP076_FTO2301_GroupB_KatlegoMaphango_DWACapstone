import { Box, TextField, styled } from '@mui/material'
import { PREVIEW } from '../../assets/constants'
import './MainLanding.css'
import { theme } from '../../theme'
import MyCard from '../MyCard/MyCard'
import { useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const Search = styled('div')({
    // backgroundColor: theme.palette.secondary.contrastText,
    padding: '0',
    borderRadius: '0.3rem',
    width: '50%'
})

const InputTheme = {
    color: theme.palette.primary.contrastText,
    input: {
        color: theme.palette.secondary.light,
    }
}

const StyledTextfield = styled(TextField)({
    '& label.Mui-focused': {
        color: theme.palette.primary.contrastText,
    },
})

const StyledBox = styled(Box)({
    maxWidth: '100%',
    border: '1px solid black',
    padding: 10
})

const Slider = (props: {shows: PREVIEW[]}) => {
    const { shows } = props

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 767, min: 464 },
            items: 1,
            slidesToSlide: 1
        }
    }

    return (
        <div style={{width: '100%'}}>
            <h2>Latest updated shows...</h2>
            <StyledBox>
                <Carousel responsive={responsive}
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    infinite={true}
                    autoPlay={true}
                    partialVisbile={false}
                    dotListClass="custom-dot-list-style"
                >
                    {shows.slice(0,5).map((show) => (
                        <div key={show.id} className='slider'>
                            <MyCard key={show.id} show={show} />
                        </div>
                    ))}
                </Carousel>
            </StyledBox>
        </div>
    )
}

type mainProps = {
    allShows: PREVIEW[]
}

const MainLanding = (mainProps: mainProps) => {
    const { allShows } = mainProps
    const [search, setSearch] = useState('')
    const [allShowsData, setAllShowsData] = useState(allShows)

    const handleSortEvent = (event: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(event.target.value)

        
    }

    return (
        <>
            {/* className='mainLanding' */}
            <Box bgcolor={theme.palette.primary.dark} flex={3} p={2}>
                <div style={{maxWidth: '80rem'}}>
                    <Slider shows={allShowsData} />
                </div>
                

                <div className="main">
                    <div className="main-top">
                        <h2>Discover Shows</h2>
                        <div className="main-top_header">
                            {/* <SearchBar /> */}
                            <Search>
                                <StyledTextfield label='Search...' 
                                    variant='outlined' 
                                    fullWidth
                                    sx={InputTheme} 
                                    onChange={(event) => setSearch(event.target.value)}
                                />
                            </Search>
                            <select onChange={(event) => handleSortEvent(event)}  className='allShows-sort'>
                                <option value="">Sort By</option>
                                <option value="A-Z">A-Z</option>
                                <option value="Z-A">Z-A</option>
                                <option value="new">New</option>
                                <option value="old">Old</option>
                            </select>
                        </div>
                    </div>
                    <div className="main-body">
                        {allShowsData.filter((show) => {
                            return search.toLowerCase() === '' ? show : show.title.toLowerCase().includes(search.toLowerCase())
                        }).map((show) => (
                            <MyCard key={show.id} show={show} />
                        ))}
                    </div>
                </div>
            </Box>
        </>
    )
}

export default MainLanding