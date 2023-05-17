import * as React from 'react';
import styles from './login.module.scss';
import TabComponent from "./TabComponent.jsx";

const Login = () => {
    return (
        <div className={styles.big_block_login}>
            <div className={styles.block_50_login}>
                <TabComponent/>
            </div>
            <div className={styles.block_50_login}>
                <img src="/login.svg" alt=""/>
            </div>
        </div>
    );
};

export default Login;