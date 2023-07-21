import { VolumeDown, VolumeUp } from "@mui/icons-material"
import { Box, IconButton, Slider, styled } from "@mui/material"

type PROPS = { 
    value: number, 
    min: number, 
    max: number, 
    onChange: any, 
    setVolume: any 
}

const StyledBox = styled(Box)({
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
})

const VolumeBar = (props: PROPS) => {
    const { value, min, max, onChange, setVolume } = props

    return (
        <>
            <StyledBox sx={{display: {sm: 'none', md: 'flex'}}}>
                {
                    value <= 1 && value > 0.5 && 
                    <IconButton size="small" onClick={() => setVolume(0)}>
                        <VolumeUp />
                    </IconButton>
                }
                {
                    value <= 0.5 && value > 0 && 
                    <IconButton size="small" onClick={() => setVolume(0)}>
                        <VolumeDown />
                    </IconButton>
                }
                {
                    value === 0 && 
                    <IconButton size="small" onClick={() => setVolume(0)}>
                        <VolumeDown />
                    </IconButton>
                }
                <Slider
                    value={value}
                    min={min}
                    max={max}
                    onChange={onChange}
                />
            </StyledBox>
        </>
    )
}

export default VolumeBar