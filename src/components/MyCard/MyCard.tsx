import { Box, Button, ButtonGroup, Card, CardContent, CardMedia, Divider, Paper, Stack, Typography, styled } from "@mui/material"
import { MONTHS, PREVIEW, genresArray } from "../../assets/constants"
import { Link } from "react-router-dom"

const StyledCard = styled(Card)({
    maxWidth: 300, 
    minWidth: 300,
    background: `
        linear-gradient(135deg, 
            var(--clr-dark-dark),
            var(--clr-dark-gray))
    `,
    backdropFilter: 'blur(10px)'
})

const CardTitle = styled(Typography)({
    fontSize: '1.2rem',
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginBottom: '1rem'
})

const Item = styled(Paper)({
    textAlign: 'center',
    background: 'inherit',
    padding: '0.5rem'
})

const GenreBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.3rem',
    cursor: 'default',
    marginTop: '1rem'
})

const StyledLink = styled(Link)({
    textDecoration: 'none'
})

type CardProps = {
    show: PREVIEW
}

const MyCard = (props: CardProps) => {
    const { show } = props
    const date = new Date(show.updated)

    const genre = show.genres.map((genre) => (
        genresArray[genre-1]
    ))

    return (
        <>
            <StyledLink to={`/show/${show.id}`}>
                <StyledCard >
                    <CardMedia
                        component="img"
                        image={show.image}
                        height={200}
                        alt={`${show.title} image`}
                    />
                    <CardContent>
                        <CardTitle variant="h5">
                            {show.title}
                        </CardTitle>
                        <Stack direction='row' 
                            divider={<Divider orientation="vertical" 
                                            flexItem />}
                            spacing={2}
                            justifyContent='center'
                        >
                            <Item>
                                {show.seasons} Season(s)
                            </Item>
                            <Item>
                                {` ${date.getDay()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`}
                            </Item>
                        </Stack>
                        <GenreBox>
                            <Typography>
                                Genre(s)
                            </Typography>
                            <ButtonGroup variant="text" aria-label="text button group" color="secondary">
                                {genre.map((item) => (
                                    <Button key={item.id}>
                                        {item.title}
                                    </Button>
                                ))}
                            </ButtonGroup>
                        </GenreBox>
                    </CardContent>
                </StyledCard>
            </StyledLink>
            
        </>
    )
}

export default MyCard