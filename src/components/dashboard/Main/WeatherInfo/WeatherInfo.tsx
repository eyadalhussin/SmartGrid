import { Box, Container, Typography } from "@mui/material";
import AirIcon from '@mui/icons-material/Air';
import WaterIcon from '@mui/icons-material/Water';
import CloudIcon from '@mui/icons-material/Cloud';
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import TimeSimulation from "../../../../Classes/TimeSimulation";
import { log } from "console";

export default function WeatherInfo() {
    const time = new TimeSimulation();

    //Styling
    const BoxWeather = styled(Box)(() => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 3,
        padding: '1.5em',
        backgroundColor: '#6366F1',
        borderRadius: '10px',
        boxShadow: '0px 5px 10px rgba(0,0,0,0.3)',
        width: '25%',
        border: '1px solid rgba(255,255,255,0.8)',
        transition: '0.2s ease',
        cursor: 'pointer',
        "&:hover": {
            transform: 'scale(1.02)'
        }
    }))

    const BoxTime = styled(Box)(() => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1.5em',
        borderRadius: 10,
        gap: '0.5em',
        boxShadow: '0px 5px 10px rgba(0,0,0,0.3)',
        width: '25%',
        transition: '0.2s ease',
        cursor: 'pointer',
        "&:hover": {
            transform: 'scale(1.02)'
        }
    }))

    const BoxIcon = styled(Box)(() => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 1,
        padding: '1.5em',
        borderRadius: 10,
        boxShadow: '0px 5px 10px rgba(0,0,0,0.3)',
        width: '15%',
        transition: '0.2s ease',
        cursor: 'pointer',
        "&:hover": {
            transform: 'scale(1.02)'
        }
    }))

    const BoxTimeNumber = styled(Box)(() => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1em',
        borderRadius: 10,
        backgroundColor: '#6366F1',
        boxShadow: '0px 5px 10px rgba(0,0,0,0.2)',
        transition: '0.2s ease',
        cursor: 'pointer',
        "&:hover": {
            transform: 'scale(1.02)'
        }
    }))

    const styles = {
        img: {
            width: '75px',
            height: 'auto'
        }
    };

    return (
        <>
            <Container sx={{ display: 'flex', justifyContent: 'space-between' }} disableGutters>
                {/* Weather */}
                <BoxWeather>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                        <Box component={'img'} src="/weatherIcons/DayClouds.PNG" alt="weather" sx={styles.img}></Box>
                        <Typography variant="h4" color="white">19°</Typography>
                    </Box>
                    <Typography 
                    variant="body1" 
                    color="white"
                    whiteSpace='pre'>
                        {time.getDayName()}, {time.getDay()}.
                        {time.getMonth()}.
                        {time.getYear()}
                        </Typography>
                </BoxWeather>
                {/* Cloud */}
                <BoxIcon>
                    <CloudIcon sx={{ color: '#6366F1', fontSize: '35px' }}></CloudIcon>
                    <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', alignItems: 'center' }} >
                        <Typography variant="h6" color={"#111927"}>
                            80
                        </Typography>
                        <Typography variant="body1" color={"#6C737F"}>
                            %
                        </Typography>
                    </Box>
                </BoxIcon>

                {/* Cloud */}
                <BoxIcon>
                    <AirIcon sx={{ color: '#6366F1', fontSize: '35px' }}></AirIcon>
                    <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', alignItems: 'center' }} >
                        <Typography variant="h6" color={"#111927"}>
                            1.5
                        </Typography>
                        <Typography variant="body1" color={"#6C737F"}>
                            km/h
                        </Typography>
                    </Box>
                </BoxIcon>

                {/* Cloud */}
                <BoxIcon>
                    <WaterIcon sx={{ color: '#6366F1', fontSize: '35px' }}></WaterIcon>
                    <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', alignItems: 'center' }} >
                        <Typography variant="h6" color={"#111927"}>
                            50
                        </Typography>
                        <Typography variant="body1" color={"#6C737F"}>
                            %
                        </Typography>
                    </Box>
                </BoxIcon>

                {/* Time */}
                <BoxTime>
                    <BoxTimeNumber>
                        <Typography variant="h5" color={"white"}>{time.getHours()}</Typography>
                    </BoxTimeNumber>
                        <Typography variant="h5" color={"#1565c0"}>:</Typography>
                    <BoxTimeNumber>
                        <Typography variant="h5" color={"white"}>{time.getMinutes()}</Typography>
                    </BoxTimeNumber>
                </BoxTime>
            </Container>
        </>
    );
}