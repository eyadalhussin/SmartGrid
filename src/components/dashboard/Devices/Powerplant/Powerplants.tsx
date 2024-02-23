import { useEffect, useState } from "react";
import { Box, Typography, styled } from "@mui/material";
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import Powerplant from "../../../../Classes/Powerplant";
import FactoryIcon from '@mui/icons-material/Factory';
import { useDataService } from "../../../../Services/DataService";

const Powerplants: React.FC = () => {

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
        backgroundColor: '#5cb85c',
        height: 'auto',
        width: '80%',
        padding:'1em',
        borderRadius: 10
    }))

    // const [powerplants, setPowerplants] = useState<Powerplant[]>([]);

    // const fetchData = async () => {
    //     try {
    //         const response = await fetch('/data/powerplants.json');
    //         const data: Powerplant[] = await response.json();
    //         setPowerplants(data);
    //     } catch (error) {
    //         console.log("Error fetching Devices", error);
    //     }
    // }

    // useEffect(() => {
    //     fetchData();
    // }, [])

    const { powerplants } = useDataService();

    useEffect(() => {

    }, [powerplants])

    return (
        <ContainerStyled>
            {powerplants.map(powerplant => (
                <BoxStyled>
                    <BoxIcon>
                        <FactoryIcon sx={{ color: 'white', fontSize: '50px' }} />
                        <Typography variant="h6" color="white">ID: {powerplant.id}</Typography>
                    </BoxIcon>
                    <Box sx={{ display: 'flex', gap: 1}}>
                        <Typography variant="body1" color="#6C737F">Name:</Typography>
                        <Typography variant="body1" color="#111927">{powerplant.name}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1}}>
                        <Typography variant="body1" color="#6C737F">Generators:</Typography>
                        <Typography variant="body1" color="#111927">{powerplant.number_of_generators}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1}}>
                        <Typography variant="body1" color="#6C737F">Power:</Typography>
                        <Typography variant="body1" color="#111927">{powerplant.current_power_generation}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1}}>
                        <Typography variant="body1" color="#6C737F">Fueltype:</Typography>
                        <Typography variant="body1" color="#111927">{powerplant.fuel_type}</Typography>
                    </Box>
                </BoxStyled>
            ))}
        </ContainerStyled>
    )
}

export default Powerplants;