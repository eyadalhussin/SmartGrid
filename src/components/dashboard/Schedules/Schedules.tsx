import styled from "@emotion/styled";
import { Box, Typography, Divider, Container, Button } from "@mui/material";
import { useEffect, useState } from "react";
import Schedule from "../../../Classes/Schedule";


const Schedules: React.FC = () => {

    const ContainerStyled = styled(Container)(() => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '2em',
        padding: '2em 0em'
    }))

    const BoxSchedule = styled(Box)(() => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'start',
        backgroundColor: '#fafafa',
        boxShadow: '0px 5px 20px rgba(0,0,0,0.2)',
        padding: '1.5em 1em',
        gap: '0.5em',
        borderRadius: '10px',
        transition: '0.2s ease',
        cursor: 'pointer',
        "&:hover": {
            transform: 'scale(1.005)'
        }
    }))

    const ScheduleID = styled(Box)(() => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '200px',
        backgroundColor: '#6366F1',
        borderRadius: '7px'
    }))

    const BoxInfo = styled(Box)(() => ({
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    }))

    const StyledDivider = styled(Box)(() => ({
        height: '0.5px',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.2)',
        alignSelf: 'center'
    }))

    const [schedules, setSchedules] = useState<Schedule[]>([]);

    useEffect(() => {
        const fetchData = async() => {
            const schedules = await fetch('/data/schedules.json').then((res) => res.json());
            setSchedules(schedules);
        }
        fetchData();
        console.log(schedules);
    }, [])

    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column',
                backgroundColor: '#fafafa'
            }}>
            <Typography variant="h4" color='#111927'>Schedules</Typography>

            <ContainerStyled disableGutters>
                {schedules.map(schedule => (
                    <BoxSchedule key={schedule.id}>
                    <ScheduleID>
                        <Typography variant="h6" color='white'>Schedule {schedule.id}</Typography>
                    </ScheduleID>
                    <BoxInfo>
                        <Typography variant="body1" color='#6C737F'>DeviceID</Typography>
                        <Typography variant="body1" color='111927'>{schedule.deviceID}</Typography>
                    </BoxInfo>
                    <StyledDivider></StyledDivider>
                    <BoxInfo>
                        <Typography variant="body1" color='#6C737F'>SmarthomeID</Typography>
                        <Typography variant="body1" color='111927'>{schedule.smarthomeId}</Typography>
                    </BoxInfo>
                    <StyledDivider></StyledDivider>
                    <BoxInfo>
                        <Typography variant="body1" color='#6C737F'>Consumption</Typography>
                        <Typography variant="body1" color='111927'>{schedule.consumption} kWh</Typography>
                    </BoxInfo>
                    <StyledDivider></StyledDivider>
                    <BoxInfo>
                        <Typography variant="body1" color='#6C737F'>Duration</Typography>
                        <Typography variant="body1" color='111927'>{schedule.duration} m</Typography>
                    </BoxInfo>
                    <StyledDivider></StyledDivider>
                    <BoxInfo>
                        <Typography variant="body1" color='#6C737F'>Start</Typography>
                        <Typography variant="body1" color='111927'>{schedule.start}</Typography>
                    </BoxInfo>
                    <StyledDivider></StyledDivider>
                    <BoxInfo>
                        <Typography variant="body1" color='#6C737F'>End</Typography>
                        <Typography variant="body1" color='111927'>{schedule.end}</Typography>
                    </BoxInfo>
                    <StyledDivider></StyledDivider>
                    <BoxInfo>
                        <Typography variant="body1" color='#6C737F'>Price</Typography>
                        <Typography variant="body1" color='111927'>{schedule.price}€</Typography>
                    </BoxInfo>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                        <Button variant="contained" sx={{ backgroundColor: '#D9534F', "&:hover": { backgroundColor: '#BE312C' } }}>Delete</Button>
                    </Box>
                </BoxSchedule>
                ))}
            </ContainerStyled>
        </Box>
    );
}

export default Schedules;