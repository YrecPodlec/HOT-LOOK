import React, { useEffect, useState } from 'react';
import '../../../index.scss';
import { useParams } from 'react-router-dom';
import { OneCollection } from '../../../http/getImages.jsx';
import styles from './images.module.scss'
import {motion} from 'framer-motion';
import {CircularProgress} from "@mui/material";

const ImagePage = () => {
    const TextAnimation = {
        hidden: {
            x: -150,
            opacity: 0
        },
        visible: custom => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: custom * 0.9
            }
        })
    }
    const AnimationCard = {
        hidden: {
            y: 150,
            opacity: 0
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: custom * 0.2
            }
        })
    }
    const hoverBox = {
        open: {y: 0},
        closed: {y: -35}
    }
    const [isOpen, setIsOpen] = useState(false);
    const [image, setImage] = useState(null);
    const [loadingData, setLoadingData] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await OneCollection(id);
                setImage(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoadingData(false);
            }
        };

        fetchData();
    }, [id]);
    return (
        <div className={styles.box_collections_items}>
            {loadingData ? (
                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <CircularProgress color="secondary"/>
                    <h1 style={{marginTop: "64px"}}>LOADING...</h1>
                </div>
            ) : (
                <div >
                    {image ? (
                        <div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                variants={TextAnimation}
                                className={styles.title_box_images}>
                                <h1 style={{color: 'white', letterSpacing: '10px'}}>{image.title}</h1>
                                <div className={styles.box_text_info_images}>
                                    <h1>CHOOSE YOUR OWN IMAGE</h1>
                                    <p>You are presented with a selection of Images of your
                                        chosen Style! You can choose the appropriate one and
                                        go to the purchase page of this image</p>
                                </div>
                            </motion.div>
                            <div className={styles.container_images_box}>
                                { image.array.map(imageId =>
                                    <motion.div
                                        whileHover={isOpen ? "open" : "closed"}
                                        variants={hoverBox}>
                                    <motion.div
                                        key={imageId._id}
                                        initial="hidden"
                                        whileInView="visible"
                                        variants={AnimationCard}
                                        className={styles.box_cards_images}>

                                        <motion.div className={styles.box_image_card}>
                                            <img src={imageId.photo} alt="" width={'100%'}/>
                                        </motion.div>
                                        <h1>{imageId.title}</h1>
                                        <p>
                                            {Intl.NumberFormat("en",
                                                {style: "currency", currency: "USD"})
                                                .format(imageId.price)}
                                        </p>
                                        </motion.div>
                                    </motion.div>
                                )}
                            </div>
                        </div>) : (
                        <div>There are no Images :(</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ImagePage;
