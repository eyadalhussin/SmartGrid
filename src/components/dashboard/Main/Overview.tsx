import { Box, Container, Typography } from "@mui/material";
import EnergyInfo from "./MainInfo/EnergyInfo/EnergyInfo";
import WeatherInfo from "./WeatherInfo/WeatherInfo";
import InfoSection from "./MainInfo/InfoSection";
import { grey } from "@mui/material/colors";
import { useDataService } from "../../../Services/DataService";
import { useEffect } from "react";

export default function Overview() {
    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1, p: 6, display: 'flex', flexDirection: 'column',
                backgroundColor: '#fafafa'
            }}>
            {/* Info */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3}}>
                <Typography variant="h4" color='#111927'>Overview</Typography>
                <WeatherInfo />
                {/* Energy Info */}
                <InfoSection />
            </Box>
        </Box>
    );
}