import React from "react";
import { Box, Button, Container, Slider, Typography } from "@mui/material";
import styled from "@emotion/styled";

const TariffInfo = () => {

    const BoxStyled = styled(Box)(() => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50%',
        width: '100%',
        // backgroundColor: '#fafafa',
        boxShadow: '0px 5px 10px rgba(0,0,0,0.3)',
        borderRadius: 10,
        gap: '1em',
        padding: '0em 2.5em',
        transition: '0.2s ease',
        cursor: 'pointer',
        "&:hover": {
            transform: 'scale(1.02)'
        }
    }))

    return (
        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1em',
            width: '50%'

        }} disableGutters>

            <BoxStyled>
                <Typography variant="h6">Tarrif Price</Typography>
                <Typography variant="h5">0.98€ / kW</Typography>
            </BoxStyled>
            <BoxStyled>
                <Typography variant="h6">Accel Factor</Typography>
                <Slider defaultValue={1} aria-label="Default" valueLabelDisplay="auto" sx={{color:"#6366F1"}}/>
            </BoxStyled>

        </Container>
    );
}

export default TariffInfo;