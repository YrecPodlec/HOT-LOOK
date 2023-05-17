import React, {forwardRef, useState} from 'react';
import styles from './Navbar.module.scss';
import {AnimatePresence, motion} from "framer-motion";
import {HOME} from "../../utils/consts.jsx";
import {navbar_consts} from "../../utils/consts_navbar.jsx";
import {Link} from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';

export let NavBar = forwardRef((props, ref) => {
    const links = navbar_consts;
    const [menuBurgerOpen, setMenuBurgerOpen] = useState(false);
    const [burgerLinksOpen, setBurgerLinksOpen] = useState({});
    const handleClick = () => {
        setMenuBurgerOpen((prev) => !prev);
        if (!menuBurgerOpen){
            setBurgerLinksOpen(() => {
                return {left: "-64px"}
            })
        } else {
            setBurgerLinksOpen(() => {
                return {left: "calc(64px * 10 * -1)"}
            })
        }
    };
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
                <div>
                    <div>
                        <div className={styles.menu_button}>
                            <input type="checkbox" id="menu_checkbox" className={styles.menu_checkbox} onClick={handleClick}/>
                            <label htmlFor="menu_checkbox" className={styles.menu_label}>
                                <button className={styles.menu_text_bar}></button>
                            </label>
                        </div>
                    </div>
                </div>
                <div
                    style={burgerLinksOpen}
                    className={styles.links}>
                    {
                        links.length ? links.map(link => (
                        <AnimatePresence>
                            <motion.div
                            whileHover={{scale: 1.15}}
                            whileTap={{scale: 0.9}}>
                                <Link
                                    key={link.id}
                                    to={link.href}
                                    style={{marginRight: link.margin}}>{link.title}
                                </Link>
                            </motion.div>
                        </AnimatePresence>
                        )): <div>ERROR</div>
                    }
                    <div className={styles.block_media_nav}>
                        <div style={{marginTop: "64px"}}>
                            <Link to={HOME}>Yuri Verbitsky Corp</Link>
                            <h1>SOCIAL MEDIA:</h1>
                            <div>
                                <InstagramIcon sx={{ fontSize: 50 }}/>
                                <a> - Instagram</a>
                            </div>
                            <div>
                                <FacebookIcon sx={{ fontSize: 50 }}/>
                                <a> - Facebook</a>
                            </div>
                            <div>
                                <PinterestIcon sx={{ fontSize: 50 }}/>
                                <a> - Pinterest</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.block_media_nav}>
                        <div>
                            <h1>ADRESS:</h1>
                            <p>900 Wilshire Blvd, Los Angeles, CA 90017, US</p>
                        </div>
                    </div>
                    <div className={styles.block_media_nav}>
                        <div style={{display: "flex"}}>
                            <a href="#">DEVELOPER</a>
                            <p style={{fontStyle: "italic"}}> - Visit page</p>
                        </div>
                    </div>
                    <div className={styles.block_media_nav}>
                        <div>
                            <h1>HOTLOOK.inc</h1>
                        </div>
                    </div>
                </div>
            </nav>
        </motion.header>
    );
});

export default NavBar;
