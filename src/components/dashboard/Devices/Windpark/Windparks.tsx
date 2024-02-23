import { useEffect, useState } from "react";
import { Box, Typography, styled } from "@mui/material";
import Windpark from "../../../../Classes/Windpark";
import WindPowerIcon from '@mui/icons-material/WindPower';
import { useDataService } from "../../../../Services/DataService";

const Windparks: React.FC = () => {

    const ContainerStyled = styled(Box)(() => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        gap: '1em',
        flexWrap: 'wrap',
    }))

    const BoxStyled = styled(Box)(() => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'auto',
        width: 'auto',
        borderRadius: 10,
        backgroundColor: '#fafafa',
        padding: '1em 0.5em',
        boxShadow: '0px 5px 20px rgba(0,0,0,0.1)',
        border: '1px solid rgba(0,0,0,0.1)',
        gap: 5,
        transition: '0.3s ease',
        cursor: 'pointer',
        '&:hover':{
            transform:'scale(1.05)'
        }
    }))

    const BoxIcon = styled(Box)(() => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5bc0de',
        height: 'auto',
        width: '80%',
        padding:'1em',
        borderRadius: 10
    }))

    // const [powerplants, setPowerplants] = useState<Windpark[]>([]);

    // const fetchData = async () => {
    //     try {
    //         const response = await fetch('/data/windparks.json');
    //         const data: Windpark[] = await response.json();
    //         setPowerplants(data);
    //     } catch (error) {
    //         console.log("Error fetching Devices", error);
    //     }
    // }

    // useEffect(() => {
    //     fetchData();
    // }, [])

    const { windparks } = useDataService();

    useEffect(() => {

    }, [windparks])

    return (
        <ContainerStyled>
            {windparks.map(windpark => (
                <BoxStyled>
                    <BoxIcon>
                        <WindPowerIcon sx={{ color: 'white', fontSize: '50px' }} />
                        <Typography variant="h6" color="white">ID: {windpark.id}</Typography>
                    </BoxIcon>
                    <Box sx={{ display: 'flex', gap: 1}}>
                        <Typography variant="body1" color="#6C737F">Name:</Typography>
                        <Typography variant="body1" color="#111927">{windpark.name}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1}}>
                        <Typography variant="body1" color="#6C737F">Turbines:</Typography>
                        <Typography variant="body1" color="#111927">{windpark.number_of_turbines}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1}}>
                        <Typography variant="body1" color="#6C737F">Diameter:</Typography>
                        <Typography variant="body1" color="#111927">{windpark.cell_turbine_diameter}</Typography>
                    </Box>
                </BoxStyled>
            ))}
        </ContainerStyled>
    )
}

export default Windparks;