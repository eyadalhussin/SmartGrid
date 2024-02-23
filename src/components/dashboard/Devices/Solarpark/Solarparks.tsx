import { useEffect, useState } from "react";
import { Box, Typography, styled } from "@mui/material";
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import Powerplant from "../../../../Classes/Powerplant";
import Solarpark from "../../../../Classes/Solarpark";
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import { useDataService } from "../../../../Services/DataService";

const Solarparks: React.FC = () => {

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
        backgroundColor: '#f0ad4e',
        height: 'auto',
        width: '80%',
        padding:'1em',
        borderRadius: 10
    }))

    // const [powerplants, setPowerplants] = useState<Solarpark[]>([]);

    // const fetchData = async () => {
    //     try {
    //         const response = await fetch('/data/solarparks.json');
    //         const data: Solarpark[] = await response.json();
    //         setPowerplants(data);
    //     } catch (error) {
    //         console.log("Error fetching Devices", error);
    //     }
    // }

    // useEffect(() => {
    //     fetchData();
    // }, [])

    const { solarparks } = useDataService();

    useEffect(()  => {
        
    }, [solarparks])

    return (
        <ContainerStyled>
            {solarparks.map(solarpark => (
                <BoxStyled>
                    <BoxIcon>
                        <SolarPowerIcon sx={{ color: 'white', fontSize: '50px' }} />
                        <Typography variant="h6" color="white">ID: {solarpark.id}</Typography>
                    </BoxIcon>
                    <Box sx={{ display: 'flex', gap: 1}}>
                        <Typography variant="body1" color="#6C737F">Name:</Typography>
                        <Typography variant="body1" color="#111927">{solarpark.name}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1}}>
                        <Typography variant="body1" color="#6C737F">Cells:</Typography>
                        <Typography variant="body1" color="#111927">{solarpark.number_of_cells}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1}}>
                        <Typography variant="body1" color="#6C737F">Efficiency:</Typography>
                        <Typography variant="body1" color="#111927">{solarpark.cell_efficiency}</Typography>
                    </Box>
                </BoxStyled>
            ))}
        </ContainerStyled>
    )
}

export default Solarparks;