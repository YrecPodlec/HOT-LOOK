import React, {useRef} from 'react';
import styles from './collab.module.scss'
import {motion} from "framer-motion";
import {AnimationCard, GirlAnimation, TextAnimation, WaveAnimation} from "../../../utils/const_animations.jsx";
import ScrollBar from "../home/ScrollBar.jsx";

const Collaborations = () => {
    const myRef = useRef(null)
    const executeScroll = () => myRef.current.scrollIntoView()
    return (
        <main style={{overflow: "hidden"}}>
            <div ref={myRef}></div>
            <div className={styles.fixedRightBox}>
                <div style={{
                    height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between"
                }}>
                    <ScrollBar/>
                    <motion.button onClick={executeScroll}
                                   style={{margin: "0 auto 5vh auto", backgroundColor: "rgba(0, 0, 0, 0)", border: "none"}}
                                   whileHover={{scale: 1.15}} whileTap={{scale: 0.9}}>
                        <img src="/rowUp.svg" alt=""
                             style={{width: "36px"}}/>
                    </motion.button>
                </div>
            </div>
            {/*block 1*/}
            <div className={styles.main_block}>
                {/*text*/}
                <motion.div className={styles.block_one_side}
                            initial="hidden"
                            whileInView="visible"
                            variants={TextAnimation} custom={1}>
                    <div className={styles.text_block}>
                        <h1>COLLABORATIONS</h1>
                        <p>
                            What does it mean? - We cooperate with
                            major representatives in the media industry,
                            which means you can order a cosplay
                            costume from a famous movie / game.
                            <br/><br/>
                            And also, get a bonus when ordering!
                        </p>
                    </div>
                </motion.div>
                <motion.div className={styles.block_one_side}
                            initial="hidden"
                            whileInView="visible"
                            variants={GirlAnimation}
                            style={{display: "flex", justifyContent: "space-around"}}>
                    <img src="/collabWomans.svg" alt=""/>
                </motion.div>
            </div>
            {/*wave*/}
            <motion.img src="/wave 1.svg" alt=""
                        initial="hidden"
                        whileInView="visible"
                        variants={WaveAnimation}
                        style={{width: "100vw", position: "relative", top: "-25vh"}}/>
            {/*block 2*/}
            <div className={styles.main_block} style={{marginTop: "-180px"}}>
                <div className={styles.block_one_side}
                     style={{display: "flex", flexDirection: "column"}}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={AnimationCard}
                        style={{display: "flex"}}>
                        <img src="/stranger.svg" alt="" style={{width: "600px", margin: "0 auto"}}/>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={TextAnimation}
                        className={styles.text_block}>
                        <p>
                            You can order a suit of 11 or Maxine, as well as
                            a uniform of Schops Ahoy
                            <br/><br/>
                            Action! When ordering, you will receive a
                            poster, of your choice
                        </p>
                    </motion.div>
                </div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={GirlAnimation}
                    className={styles.block_one_side}
                     style={{display: "flex", justifyContent: "space-around"}}>
                    <div style={{textAlign: "center"}}>
                        <img src="/poster.svg" alt=""/>
                        <p>Poster</p>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
                        <img src="/plus.svg" alt=""/>
                    </div>
                    <div style={{textAlign: "center"}}>
                        <img src="/maxine.svg" alt=""/>
                        <p>Perfect Outfit</p>
                    </div>
                </motion.div>
            </div>
            {/*wave*/}
            <motion.img src="/wave 2.svg" alt=""
                        initial="hidden"
                        whileInView="visible"
                        variants={WaveAnimation}
                        style={{
                            width: "100vw",
                            position: "relative"}}/>
            {/*block 3*/}
            <div className={styles.main_block}>
                <div className={styles.block_one_side}
                     style={{display: "flex", flexDirection: "column"}}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={AnimationCard}
                        style={{display: "flex"}}>
                        <img src="/fortnite.svg" alt="" style={{width: "800px", margin: "0 auto"}}/>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={TextAnimation}
                        className={styles.text_block}>
                        <p>
                            You can order an Evie costume, as well as
                            characters from the new Chapter!
                            <br/><br/>
                            When ordering, you will receive an activator
                            key for 100 free V-bucks!
                        </p>
                    </motion.div>
                </div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={GirlAnimation}
                    className={styles.block_one_side}
                     style={{display: "flex", justifyContent: "space-around"}}>
                    <div style={{textAlign: "center"}}>
                        <img src="/bucks.svg" alt="" style={{width: "300px"}}/>
                        <p>100 V-Bucks <br/>
                            FOR FREE</p>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
                        <img src="/plus.svg" alt=""/>
                    </div>
                    <div style={{textAlign: "center"}}>
                        <img src="/evie.svg" alt="" style={{width: "330px"}}/>
                        <p>Perfect Outfit</p>
                    </div>
                </motion.div>
            </div>
            {/*wave*/}
            <motion.img src="/wave 1.svg" alt=""
                        initial="hidden"
                        whileInView="visible"
                        variants={WaveAnimation}
                        style={{width: "100vw"}}/>
            {/*block 4*/}
            <div className={styles.main_block} style={{marginBottom: "25vh"}}>
                <div className={styles.block_one_side}
                     style={{display: "flex", flexDirection: "column"}}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={AnimationCard}
                        style={{display: "flex"}}>
                        <img src="/atom.svg" alt="" style={{width: "800px", margin: "0 auto"}}/>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={TextAnimation}
                        className={styles.text_block}>
                        <p>
                            You can order a suit of Twins, as detailed as
                            possible, as in the game
                            <br/><br/>
                            When ordering, you will get access to the
                            secret weapon in the game
                        </p>
                    </motion.div>
                </div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={GirlAnimation}
                    className={styles.block_one_side}
                     style={{display: "flex", justifyContent: "space-around"}}>
                    <div style={{textAlign: "center"}}>
                        <img src="/weapon.svg" alt="" style={{width: "300px"}}/>
                        <p>Secret Weapon</p>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
                        <img src="/plus.svg" alt=""/>
                    </div>
                    <div style={{textAlign: "center"}}>
                        <img src="/twins.svg" alt="" style={{width: "330px"}}/>
                        <p>Perfect Outfit</p>
                    </div>
                </motion.div>
            </div>
        </main>
    );
};

export default Collaborations;