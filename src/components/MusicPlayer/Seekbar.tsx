import { Box, Grid, Slider, Typography, styled } from "@mui/material"

type PROPS = { 
    value: number, 
    min: number, 
    max: number, 
    onInput: any, 
}

const StyledSeekbar = styled(Box)({
    flexDirection: 'row',
    alignItems: 'center',
    background: 'pink'
}) 

const Seekbar = (props: PROPS) => {
    const { value, min, max, onInput } = props

    const getTime = (time: number ) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`;

    return (
        <>
            <StyledSeekbar sx={{display: {xs: 'none', sm: 'flex'}}}>
                <Typography component='p'>{value === 0 ? '0:00' : getTime(value)}</Typography>

                <Box sx={{ width: 250, mx: 2 }}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs>
                            <Slider
                                value={typeof value === 'number' ? value : 0}
                                onChange={onInput}
                                min={min}
                                max={max}
                            />
                        </Grid>
                    </Grid>
                </Box>

                <Typography component='p'>{max === 0 ? '0:00' : getTime(max)}</Typography>
            </StyledSeekbar>
        </>
    )
}

export default Seekbar