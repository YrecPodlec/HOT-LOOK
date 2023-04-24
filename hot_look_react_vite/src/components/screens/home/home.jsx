import React, {useRef} from 'react';
import {Canvas} from "@react-three/fiber";
import styles from "./Home.module.scss";
import TextComponent from "../../TextComponent/TextComponent.jsx";
import {CHOOSE_STYLE, COLLABORATIONS, COLLECTIONS} from "../../../utils/consts.jsx";
import Blob from "../../blob/blob.jsx";
import {motion, useScroll, useSpring} from 'framer-motion'
import {Link} from "react-router-dom";
const Home = () => {


    // const [offsetY, setOffsetY] = useState(1);
    // const handleScroll = () => setOffsetY(window.pageYOffset);
    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, [])

    const TextAnimation = {
        hidden: {
            x: -150,
            opacity: 0
        },
        visible: custom => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: custom * 0.4
            }
        })
    }
    const GirlAnimation = {
        hidden: {
            x: 150,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {delay: .6}
        }
    }
    const BlobAnimate = {
        hidden:{
            x: -400,
            opacity: 0,
            rotate: -90
        },
        visible: {
            x: 0,
            opacity: 1,
            rotate: 0,
            transition: {delay: .9, duration: 1}
        }
    }
    const WaveAnimation = {
        hidden: {
            y: 50,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {delay: .3, duration: 1}
        }
    }
    const myRef = useRef(null)
    const executeScroll = () => myRef.current.scrollIntoView()
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress);
    return (
        <main className={styles.home} style={{overflow: "hidden"}}>
            <div ref={myRef}></div>
            {/*fixed right box*/}
            <div className={styles.fixedRightBox}>
                <div style={{
                    height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between"
                }}>
                    <div className={styles.scroolBox}>
                        <motion.div
                            className={styles.scrollBar}
                            style={{scaleX}}>
                        </motion.div>
                    </div>
                    <motion.button onClick={executeScroll}
                            style={{margin: "0 auto 5vh auto", backgroundColor: "rgba(0, 0, 0, 0)", border: "none"}}
                    whileHover={{scale: 1.15}} whileTap={{scale: 0.9}}>
                        <img src="/rowUp.svg" alt=""
                             style={{width: "36px"}}/>
                    </motion.button>
                </div>
            </div>
            {/*block1*/}
            <div className={styles.block_home} style={{marginTop: "81px"}} >
                {/*text block */}
                <motion.div className={styles.text_home}
                            initial="hidden"
                            whileInView="visible"
                            variants={TextAnimation} custom={1}>
                    <TextComponent itemId={1}/>
                    <motion.a href="#" variants={TextAnimation} custom={2}>YURI VERBITSKY corp</motion.a>
                </motion.div>
                {/*girl block*/}
                <motion.div className={styles.girl_home}
                            initial="hidden"
                            whileInView="visible"
                            variants={GirlAnimation}>
                    <img src="/girls_home.png" alt=""/>
                </motion.div>
            </div>
            <motion.img src="/wave 1.svg" alt=""
                        initial="hidden"
                        whileInView="visible"
                        variants={WaveAnimation}
                        style={{
                width: "100vw",
                position: "relative",
                top: "-20vh"
            }}/>
            {/*block 2*/}
            <div className={styles.block_home} style={{marginTop: "-100px"}}>
                {/*text block*/}
                <motion.div style={{width: "50%"}}>
                    <motion.div initial="hidden"
                                whileInView="visible"
                                variants={TextAnimation} custom={1}>
                        <TextComponent itemId={2}/>
                    </motion.div>
                    <motion.div style={{marginTop: "100px"}}
                                initial="hidden"
                                whileInView="visible"
                                variants={TextAnimation} custom={2}>
                        <motion.div
                        whileTap={{scale: .9}}>
                            <Link className={styles.button_home} to={COLLECTIONS}>
                                <img src="/point-hand.svg" alt="" className={styles.hand_point}/>
                                COLLECTIONS</Link>
                        </motion.div>
                    </motion.div>
                </motion.div>
                {/*girl block*/}
                <motion.div className={styles.girl_home_2}
                            initial="hidden"
                            whileInView="visible"
                            variants={GirlAnimation}>
                    <img src="/home_collections.jpg" alt="" className={styles.img_home}/>
                </motion.div>
            </div>
            <motion.img src="/wave 2.svg" alt=""
                        initial="hidden"
                        whileInView="visible"
                        variants={WaveAnimation}
                        style={{
                width: "100vw",
                position: "relative"
            }}/>
            {/*block 3*/}
            <div className={styles.block_home} style={{marginTop: "0"}}>
                {/*text block left*/}
                <motion.div className={styles.block3_text}>
                    <motion.h1 initial="hidden"
                               whileInView="visible"
                               variants={TextAnimation} custom={1}>Why choose HOT LOOK?</motion.h1>
                    <motion.div className={styles.blob}
                         initial="hidden"
                         whileInView="visible"
                         variants={BlobAnimate}>
                        <div>
                            <Canvas camera={{position: [0.0, 0.0, 8.0]}}>
                                <Blob/>
                            </Canvas>
                        </div>
                    </motion.div>
                </motion.div>
                {/*text right*/}
                <motion.div className={styles.block3_text} initial="hidden"
                            whileInView="visible"
                            variants={GirlAnimation}>
                    <p>
                        1. HOTLOOK is a unique platform where a huge
                        assortment of different types of styles and
                        images is collected
                        <br/><br/>
                        No need to search on different platforms for
                        what you want, everything you need is in
                        HOTLOOK!
                        <br/><br/>
                        2. Need a cosplay costume? Go to the
                        <Link to={COLLABORATIONS}>"COLLABORATIONS"</Link> to find the image you need!
                        <br/><br/>
                        When ordering goods, there are also
                        promotions!
                        <br/><br/>
                        3. Don't know which style suits you? Go to
                        <Link to={CHOOSE_STYLE}>"CHOOSE STYLE"</Link> to take a small test, the result
                        will return suggestions for which style you
                        should choose!
                    </p>
                </motion.div>
            </div>
            <motion.img src="/wave 1.svg" alt=""
                        initial="hidden"
                        whileInView="visible"
                        variants={WaveAnimation}
                        style={{
                width: "100vw",
                position: "relative"
            }}/>
            {/*block 4*/}
            <div className={styles.block_home}>
                {/*text block*/}
                <div style={{width: "50%"}}>
                    <motion.div initial="hidden"
                                whileInView="visible"
                                variants={TextAnimation} custom={1}>
                        <TextComponent itemId={3}/>
                    </motion.div>
                    <motion.div style={{marginTop: "100px"}}
                                initial="hidden"
                                whileInView="visible"
                                variants={TextAnimation} custom={2}>
                        <motion.div
                        whileTap={{scale: .9}}>
                            <Link className={styles.button_home} to={COLLABORATIONS}>
                                <img src="/point-hand.svg" alt="" className={styles.hand_point}/>
                                COLLABORATIONS</Link>
                        </motion.div>
                    </motion.div>
                </div>
                {/*girls block*/}
                <motion.div className={styles.girl_home_2}
                            initial="hidden"
                            whileInView="visible"
                            variants={GirlAnimation}>
                    <img src="/collabWomans.svg" alt="" className={styles.collabGirl}/>
                </motion.div>
            </div>
        </main>
    );
};
export default Home;