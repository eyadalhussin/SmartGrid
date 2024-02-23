import { Box, Container, Divider, Typography } from "@mui/material";
import Smarthomes from "./Smarthome/Smarthomes";
import Powerplants from "./Powerplant/Powerplants";
import Solarparks from "./Solarpark/Solarparks";
import Windparks from "./Windpark/Windparks";

export default function Devices() {
    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column',
                backgroundColor: '#fafafa',
                
            }}>
            {/* Info */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Typography variant="h4" color='#111927'>Devices</Typography>
                <Typography variant="h6" color='#111927'>Smart Homes</Typography>
                <Divider></Divider>
                <Smarthomes />
                <Typography variant="h6" color='#111927'>Powerplants</Typography>
                <Divider></Divider>
                <Powerplants />
                <Typography variant="h6" color='#111927'>Solarparks</Typography>
                <Divider></Divider>
                <Solarparks />
                <Typography variant="h6" color='#111927'>Windparks</Typography>
                <Divider></Divider>
                <Windparks />
            </Box>
        </Box>
    );
}