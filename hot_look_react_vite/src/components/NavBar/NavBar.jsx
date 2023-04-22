import React, {forwardRef} from 'react';
import styles from './Navbar.module.scss';
import {AnimatePresence, motion} from "framer-motion";
import {HOME} from "../../utils/consts.jsx";
import {navbar_consts} from "../../utils/consts_navbar.jsx";
import {Link} from "react-router-dom";

export let NavBar = forwardRef((props, ref) => {
    const links = navbar_consts;
    return (
        <motion.header ref={ref}>
            <nav className={styles.navbar}>
                <AnimatePresence>
                    <motion.div
                        whileHover={{scale: 1.15}}
                        whileTap={{scale: 0.9}}>
                        <Link to={HOME}>
                            <img src="/svg_hot_look.svg" alt="" className={styles.logo}/>
                        </Link>
                    </motion.div>
                </AnimatePresence>
                <div className={styles.links}>
                    {
                        links.length ? links.map(link => (
                        <AnimatePresence>
                            <motion.div
                            whileHover={{scale: 1.15}}
                            whileTap={{scale: 0.9}}>
                                <Link
                                    key={link.id}
                                    to={link.href}
                                    style={{marginRight: link.margin}}>{link.title}</Link>
                            </motion.div>
                        </AnimatePresence>
                        )): <div>ERROR</div>
                    }
                </div>
            </nav>
        </motion.header>
    );
});

export default NavBar;
