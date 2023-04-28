import React from 'react';
import TextComponent from "../../TextComponent/TextComponent.jsx";
import "../../../index.scss"
import {ImagesList} from "../../../utils/const_images.jsx";
import styles from './Collections.module.scss';
import {motion} from "framer-motion";

const ImagePage = () => {
    const AnimationCard = {
        hidden: {
            y: -150,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1
        }
    }
    const TextAnimation = {
        hidden: {
            x: -150,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1
        }
    }
    const image = ImagesList;
    return (
        <main className="mx-16 mb-72"
        style={{
            marginLeft: "65px",
            marginRight: "65px",
            marginBottom: "288px"
        }}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={TextAnimation}
            style={{
                marginTop: "144px",
                width: "60%"
            }}>
                <TextComponent itemId={5}/>
            </motion.div>
            <div className={styles.image_box}>
                {
                    image.length ? image.map(item => (
                        <motion.div key={item.id} className={styles.background_image_box}
                                    initial="hidden"
                                    whileInView="visible"
                                    variants={AnimationCard}>
                                <div>
                                    <div
                                        style={{height: "453px", backgroundImage: `url(${item.photo})`,
                                        backgroundSize: "cover", borderRadius: "25px", width: "288px"}}>
                                    </div>
                                    <h1>{item.title}</h1>
                                    <p>
                                        {Intl.NumberFormat("en",
                                            {style: "currency", currency: "USD"}).format(item.price)}
                                    </p>
                                </div>
                        </motion.div>
                    )) : <div>Error</div>
                }
            </div>
        </main>
    );
};

export default ImagePage;