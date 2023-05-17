import React from 'react';
import {TabContext, TabList, TabPanel} from "@mui/lab";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { purple, red } from '@mui/material/colors';
import styles from "./tabs.module.scss";
import {Button} from "@mui/material";
const TabComponent = () => {
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const accent = purple.A200;
    return (
        <div className={styles.tabs_big_box_main}>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{bgcolor: 'rgba(173,20,87,0.5)', borderRadius: '24px'}}>
                        <TabList onChange={handleChange}
                                 aria-label="lab API tabs example"
                                 textColor="accent" centered>
                            <Tab label="LOGIN" value="1" />
                            <Tab label="REGISTRATION" value="2" />
                        </TabList>
                    </Box>
                    <p>Login or Create an account
                        if you are a new user</p>
                    <TabPanel value="1">
                        <div className={styles.login_box_container}>
                            <h1>Email / Login</h1>
                            <input type="text" name="" id=""/>
                            <h1>Enter your Password</h1>
                            <input type="text" name="" id=""/>
                            <Button variant="contained" color="warning">LOGIN</Button>
                        </div>
                    </TabPanel>
                    <TabPanel value="2">
                        <div className={styles.login_box_container}>
                            <h1>Email</h1>
                            <input type="text" name="" id=""/>
                            <h1>Login</h1>
                            <input type="text" name="" id=""/>
                            <h1>Enter your Password</h1>
                            <input type="text" name="" id=""/>
                            <h1>Confirm your Password</h1>
                            <input type="text" name="" id=""/>
                            <Button variant="contained" color="warning">REGISTRATION</Button>
                        </div>
                    </TabPanel>
                </TabContext>
            </Box>
        </div>
    );
};

export default TabComponent;