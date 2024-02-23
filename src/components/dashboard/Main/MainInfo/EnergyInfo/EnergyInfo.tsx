import React from "react";
import styled from "@emotion/styled";
import { Box, Container, Paper, Typography } from "@mui/material";
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import FactoryIcon from '@mui/icons-material/Factory';
import OfflineBoltOutlinedIcon from '@mui/icons-material/OfflineBoltOutlined';
import EvStationOutlinedIcon from '@mui/icons-material/EvStationOutlined';
import FactoryOutlinedIcon from '@mui/icons-material/FactoryOutlined';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';

interface EnergyInfoProps{
    production:number;
    consumption:number;
}

const EnergyInfo = ({production, consumption} : EnergyInfoProps) => {

    const BoxIconStyled = styled(Box)(() => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10px',
        width: '50%',
        height: '125px',
        backgroundColor: '#fafafa',
        border: '1px solid rgba(255,255,255,0.3)',
        boxShadow: '0px 5px 10px rgba(0,0,0,0.3)',
        gap: 5,
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
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2

        }} disableGutters>

            <Box sx={{ display: 'flex', gap: 2, width: '100%' }}>
                <BoxIconStyled>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.2em' }}>
                        <OfflineBoltOutlinedIcon sx={{ fontSize: '40px', color:'#d9534f' }} />
                        <Typography variant="body1" align="center" color='#d9534f'>Consumption</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography variant="h5" color='#111927'>{consumption}</Typography>
                        <Typography variant="body1" color='#6C737F'>kWh</Typography>
                    </Box>
                </BoxIconStyled>

                <BoxIconStyled>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.2em' }}>
                        <EvStationOutlinedIcon sx={{ fontSize: '40px', color:'#f0ad4e' }} />
                        <Typography variant="body1" align="center" color='#f0ad4e'>Production</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography variant="h5" color='#111927'>{production}</Typography>
                        <Typography variant="body1" color='#6C737F'>kWh</Typography>
                    </Box>
                </BoxIconStyled>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, width: '100%' }}>
                <BoxIconStyled>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.2em' }}>
                        <CottageOutlinedIcon sx={{ fontSize: '40px', color:'#5bc0de' }} />
                        <Typography variant="body1" align="center" color="#5bc0de">Storage</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography variant="h5" color='#111927'>{production}</Typography>
                        <Typography variant="body1" color='#6C737F'>kWh</Typography>
                    </Box>
                </BoxIconStyled>

                <BoxIconStyled>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.2em' }}>
                        <FactoryOutlinedIcon sx={{ fontSize: '40px', color:"#5cb85c" }} />
                        <Typography variant="body1" align="center" color="#5cb85c">Percentage</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography variant="h5" color='#111927'>{(production / 500000)*100}</Typography>
                        <Typography variant="body1" color='#6C737F'>%</Typography>
                    </Box>
                </BoxIconStyled>
            </Box>

        </Container >
    );
}

export default EnergyInfo;