import { Route, Routes } from "react-router-dom"
import Devices from "./components/dashboard/Devices/Devices"
import Overview from "./components/dashboard/Main/Overview"
import Schedules from "./components/dashboard/Schedules/Schedules"

const AppRouter: React.FC = () => {
    return (
            <Routes>
                <Route path="/" element={<Overview />}/>
                <Route path="/overview" element={<Overview />}/>
                <Route path="/devices" element={<Devices />}/>
                <Route path="/schedules" element={<Schedules />}/>
            </Routes>
    )
}

export default AppRouter;