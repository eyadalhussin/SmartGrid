import { useEffect, useState } from "react";
import Smarthome from "../../../../Classes/Smarthome";
import { Box, Container, Typography, styled } from "@mui/material";
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import { useDataService } from "../../../../Services/DataService";

const Smarthomes: React.FC = () => {

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
        '&:hover': {
            transform: 'scale(1.05)'
        }
    }))

    const BoxIcon = styled(Box)(() => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0275d8',
        height: 'auto',
        width: '80%',
        padding: '1em',
        borderRadius: 10
    }))

    // const [smarthomes, setSmarthomes] = useState<Smarthome[]>([]);

    // const fetchData = async () => {
    //     try {
    //         const response = await fetch('/data/smarthomes.json');
    //         const data: Smarthome[] = await response.json();
    //         setSmarthomes(data);
    //     } catch (error) {
    //         console.log("Error fetching Devices", error);
    //     }
    // }

    // useEffect(() => {
    //     fetchData();
    // }, [])

    const { smarthomes } = useDataService();

    useEffect(() => {
    }, [smarthomes]);



    return (
        <ContainerStyled>
            {smarthomes.map(home => (
                <BoxStyled>
                    <BoxIcon>
                        <OtherHousesIcon sx={{ color: 'white', fontSize: '50px' }} />
                        <Typography variant="h6" color="white">ID: {home.id}</Typography>
                    </BoxIcon>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <Typography variant="body1" color="#6C737F">IP:</Typography>
                        <Typography variant="body1" color="#111927">{home.ip}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <Typography variant="body1" color="#6C737F">Consumption:</Typography>
                        <Typography variant="body1" color="#111927">{home.consumption}</Typography>
                    </Box>
                </BoxStyled>
            ))}
        </ContainerStyled>
    )
}

export default Smarthomes;