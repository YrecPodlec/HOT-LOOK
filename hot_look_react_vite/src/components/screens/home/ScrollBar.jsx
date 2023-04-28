import React, {useEffect, useRef, useState} from 'react';
import styles from "./Home.module.scss";

const ScrollBar = () => {
    const [scrollTop, setScrollTop] = useState(0)
    const onScroll = () => {
        const winScroll_bar = document.documentElement.scrollTop;
        const height_bar = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled_bar = (winScroll_bar / height_bar) * 100;
        setScrollTop(scrolled_bar)
    }

    useEffect(() => {
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])
    return (
        <>
            <div className={styles.scroolBox}>
                <div className={styles.progress_bar}
                     style={{height: `${scrollTop}%`}}></div>
                <div
                    style={{display: "flex",
                        height: "60vh", flexDirection: "column",
                        top: "8vh",
                        justifyContent: "space-around", zIndex: 999, position: "absolute"}}>
                    <img src="/ball.svg" alt="" style={{width: "18px"}}/>
                    <img src="/ball.svg" alt="" style={{width: "18px"}}/>
                    <img src="/ball.svg" alt="" style={{width: "18px"}}/>
                    <img src="/ball.svg" alt="" style={{width: "18px"}}/>
                </div>
            </div>
        </>
    );
};

export default ScrollBar;