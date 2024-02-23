import { Badge, Box, TextField } from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

const TopBar = () => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#fafafa',
            boxShadow: 5,
            borderBottom: '1px solid rgba(0,0,0,0.2)',
            padding: '0.8em 1.5em'
        }}>
            {/* Left Search Field */}
            <TextField id="outlined-basic" label="Search" variant="outlined"  />
            {/* Right Notification */}
            <Box sx={{ display: 'flex', gap: 2 }}>
                <Badge badgeContent={4} color="error" >
                    <MailOutlineIcon sx={{ color: 'black' }} />
                </Badge>

                <Badge badgeContent={4} color="error">
                    <NotificationsNoneIcon sx={{ color: 'black' }} />
                </Badge>

                <Badge>
                    <PermIdentityIcon sx={{ color: 'black' }} />
                </Badge>
            </Box>
        </Box>
    );
}

export default TopBar;