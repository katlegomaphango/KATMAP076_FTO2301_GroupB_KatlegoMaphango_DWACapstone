import { VolumeUp } from "@mui/icons-material"
import { Box, Button, Grid, Input, Slider, Typography, styled } from "@mui/material"

type PROPS = { 
    value: number, 
    min: number, 
    max: number, 
    onInput: any, 
    setSeekTime: React.Dispatch<React.SetStateAction<number>>, 
    appTime: number, 
}

const StyledSeekbar = styled(Box)({
    flexDirection: 'row',
    alignItems: 'center',
}) 

const Seekbar = (props: PROPS) => {
    const { value, min, max, onInput, setSeekTime, appTime } = props

    const getTime = (time: number ) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`;

    const handleBlur = () => {
        if (value < 0) {
            setSeekTime(min);
        } else if (value > 100) {
            setSeekTime(max);
        }
    };

    return (
        <>
            <StyledSeekbar sx={{display: {xs: 'none', sm: 'flex'}}}>
                <Button sx={{display: {sm: 'none', md: 'block'}, mr: {md: 4}}} onClick={() => setSeekTime(appTime - 5)}>
                    -
                </Button>
                <Typography component='p'>{value === 0 ? '0:00' : getTime(value)}</Typography>

                <Box sx={{ width: 250 }}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>
                        <VolumeUp />
                        </Grid>
                        <Grid item xs>
                        <Slider
                            value={typeof value === 'number' ? value : 0}
                            onChange={onInput}
                            min={min}
                            max={max}
                        />
                        </Grid>
                        <Grid item>
                        <Input
                            value={value}
                            size="small"
                            onChange={onInput}
                            onBlur={handleBlur}
                            inputProps={{
                            step: 10,
                            min: 0,
                            max: 100,
                            type: 'number',
                            }}
                        />
                        </Grid>
                    </Grid>
                </Box>

                <Typography component='p'>{max === 0 ? '0:00' : getTime(max)}</Typography>
                <Button sx={{display: {sm: 'none', md: 'block'}, mr: {md: 4}}} onClick={() => setSeekTime(appTime + 5)}>
                    +
                </Button>
            </StyledSeekbar>
        </>
    )
}

export default Seekbar