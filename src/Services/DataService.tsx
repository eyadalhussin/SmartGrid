import { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface Smarthome {
    id: number;
    ip: string;
    consumption: number;
}

interface Powerplant {
    id: number;
    name: string;
    number_of_generators: number;
    current_power_generation: number;
    fuel_type: string;
}

interface Solarpark {
    id: number;
    name: string;
    number_of_cells: number;
    cell_efficiency: number;
}

interface Windpark {
    id: number;
    name: string;
    number_of_turbines: number;
    turbine_efficiency: number;
    cell_turbine_diameter: number;
}

interface DataServiceContextProps {
    smarthomes: Smarthome[],
    solarparks: Solarpark[],
    powerplants: Powerplant[],
    windparks: Windpark[]

    setSmarthomes: React.Dispatch<React.SetStateAction<Smarthome[]>>;
    setSolarparks: React.Dispatch<React.SetStateAction<Solarpark[]>>;
    setPowerplants: React.Dispatch<React.SetStateAction<Powerplant[]>>;
    setWindparks: React.Dispatch<React.SetStateAction<Windpark[]>>;
}

const DataServiceContext = createContext<DataServiceContextProps | undefined>(undefined);

export const DataService: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [smarthomes, setSmarthomes] = useState<Smarthome[]>([]);
    const [solarparks, setSolarparks] = useState<Solarpark[]>([]);
    const [powerplants, setPowerplants] = useState<Powerplant[]>([]);
    const [windparks, setWindparks] = useState<Windpark[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const smarthomeData = await fetch('/data/smarthomes.json').then((res) => res.json());
            setSmarthomes(smarthomeData);

            // Fetch Solarpark data
            const solarparkData = await fetch('/data/solarparks.json').then((res) => res.json());
            setSolarparks(solarparkData);

            // Fetch Powerplant data
            const powerplantData = await fetch('/data/powerplants.json').then((res) => res.json());
            setPowerplants(powerplantData);

            // Fetch Windpark data
            const windparkData = await fetch('/data/windparks.json').then((res) => res.json());
            setWindparks(windparkData);
        }

        fetchData();
    }, []);

    return (
        <DataServiceContext.Provider
        value={{
            smarthomes,
            powerplants,
            windparks,
            solarparks,
            setSmarthomes,
            setPowerplants,
            setSolarparks,
            setWindparks
        }}
        >
            {children}
        </DataServiceContext.Provider>
    )
}

export const useDataService = () => {
    const context = useContext(DataServiceContext);
    if(!context){
        throw new Error('Error in the Service');
    }
    return context;
}