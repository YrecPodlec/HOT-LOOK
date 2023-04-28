import React from 'react';
import styles from "./Footer.module.scss";
import {navbar_consts} from "../../utils/consts_navbar.jsx";
import {Link} from "react-router-dom";
import {HOME} from "../../utils/consts.jsx";
const Footer = () => {
    const links = navbar_consts;
    return (
        <footer>
            <img src="/footer.svg" alt="" className={styles.footerImg}/>
            <div className={styles.footer_block}>
                <div className={styles.footer_content}>
                    <h1>SITE NAVIGATION</h1>
                    <div className={styles.navigation_footer}>
                        {
                            links.length ? links.map(link => (
                                <a key={link.id} href={link.href}>&#8226;{link.title}</a>
                            )): <div>Error</div>
                        }
                    </div>
                </div>
                <div className={styles.footer_content}>
                    <div style={{display: "flex", justifyContent: "space-around"}}>
                        <img src="/svg_hot_look.svg" alt=""/>
                    </div>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <div>
                            <h1>HOT LOOK</h1>
                            <p>Find Your Style!</p>
                        </div>
                        <div>
                            <h1>DEVELOPER</h1>
                            <Link to={HOME}
                                  style={{fontSize: "16px"}}>
                                Yuri Verbitsky Corp
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.footer_content}></div>
            </div>
        </footer>
    );
};

export default Footer;