import { Box, TextField, Typography, styled } from '@mui/material'
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

const StyledDiscoverText = styled(Typography)({
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginTop: '3rem',
    marginBottom: '3rem',
})

const StyledLatestText = styled(Typography)({
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
    textAlign: 'center'
})

const StyledBox = styled(Box)({
    border: '1px solid black',
    padding: 5,
    borderRadius: 10,
    borderColor: theme.palette.primary.contrastText,
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
            <StyledLatestText>Latest updated shows...</StyledLatestText>
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
        const sortby = event.target.value

        if(sortby === 'A-Z') {
            const sorted = [...allShowsData].sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1 )
            setAllShowsData(sorted)
        } else if(sortby === 'Z-A') {
            const sorted = [...allShowsData].sort((a, b) => a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1 )
            setAllShowsData(sorted)
        } else if (sortby === 'new') {
            const sorted = [...allShowsData].sort((a, b) => Date.parse(b.updated) - Date.parse(a.updated) )
            setAllShowsData(sorted)
        } else if (sortby === 'old') {
            const sorted = [...allShowsData].sort((a, b) => Date.parse(a.updated) - Date.parse(b.updated) )
            setAllShowsData(sorted)
        } else {
            setAllShowsData([...allShows])
        }
    }

    return (
        <>
            <Box bgcolor={theme.palette.primary.dark} p={4}>
                <div>
                    <Slider shows={allShowsData} />
                </div>

                <div className="main">
                    <div className="main-top">
                        <StyledDiscoverText>Discover Shows</StyledDiscoverText>
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