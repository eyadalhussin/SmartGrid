import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import LeftDrawer from './Sidebar/LeftDrawer';
import TopBar from './TopBar/TopBar';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from '../../AppRouter';
import { DataService } from '../../Services/DataService';

export default function Dashboard() {
    return (
        <Box>
            <CssBaseline />
            <Box sx={{ display: 'flex' }}>
                <BrowserRouter>
                    <LeftDrawer />
                    <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                        <TopBar />
                        <DataService>
                            <AppRouter />
                        </DataService>
                    </Box>
                </BrowserRouter>
            </Box>
        </Box >
    );
}