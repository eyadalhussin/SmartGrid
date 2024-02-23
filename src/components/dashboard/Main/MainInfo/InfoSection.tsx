import { Container } from "@mui/material";
import EnergyInfo from "./EnergyInfo/EnergyInfo";
import DevicesInfo from "./DevicesInfo/DevicesInfo";
import TariffInfo from "./TariffInfo/TariffInfo";
import { useDataService } from "../../../../Services/DataService";
import { useEffect } from "react";



export default function InfoSection() {
    const { smarthomes, powerplants, solarparks, windparks } = useDataService();

    useEffect(() => {
    }, [smarthomes, powerplants, solarparks, windparks]);

    let consumption:number = 0;
    let production:number = 0;
    let devices: number[] = [];

    smarthomes.forEach(home => {
        consumption += home.consumption;
    });

    powerplants.forEach(powerplant => {
        production += powerplant.current_power_generation;
    })

    devices.push(smarthomes.length);
    devices.push(powerplants.length);
    devices.push(solarparks.length);
    devices.push(windparks.length);

    return (
        <Container disableGutters sx={{
            display: 'flex',
            gap: 3
            }}>
            <EnergyInfo production = {production} consumption = {consumption} />
            <DevicesInfo devices = {devices}/>
            <TariffInfo/>
        </Container>
    );
}