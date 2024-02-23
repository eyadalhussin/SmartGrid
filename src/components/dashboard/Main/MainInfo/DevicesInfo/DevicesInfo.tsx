import React from "react";
import { Box, Container, Paper, Typography } from "@mui/material";
import { PieChart } from '@mui/x-charts/PieChart';

interface DeviceInfoProps{
    devices:number[];
}

const DevicesInfo = ( {devices} : DeviceInfoProps) => {


    return (
        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1em',
            padding: '1em',
            backgroundColor: '#fafafa',
            borderRadius: 2,
            boxShadow: 5,
            transition: '0.2s ease',
            cursor: 'pointer',
            "&:hover": {
                transform: 'scale(1.02)'
            }
        }} disableGutters>
            <Typography variant="h5">
                Devices
            </Typography>
            <PieChart
                series={[
                    {
                        data: [
                            { id: 0, value: devices[0], label: 'Smart Homes', color: '#d9534f'},
                            { id: 1, value: devices[1], label: 'Windparks', color: '#f0ad4e'},
                            { id: 2, value: devices[2], label: 'Solarparks', color: '#5cb85c'},
                            { id: 3, value: devices[3], label: 'Powerplants', color: '#5bc0de'}
                        ],
                    },
                ]}
                width={400}
                height={200}
            />

        </Container>
    );
}

export default DevicesInfo;