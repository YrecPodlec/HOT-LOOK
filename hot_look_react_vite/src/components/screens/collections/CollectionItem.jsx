import React, {useContext} from 'react';
import styles from './Collections.module.scss'
import {Link, useNavigate} from "react-router-dom";
import {IMAGE} from "../../../utils/consts.jsx";
import {motion} from "framer-motion";
import {AnimationCard} from "../../../utils/const_animations.jsx";

const CollectionItem = ({items}) => {
    const history = useNavigate();
    return (
        <motion.div key={items._id}
                    className={styles.collection_card}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={AnimationCard}>
            <img src={items.photo} alt={items.photo} height="400" width="282"/>
            <div style={{display: "flex", justifyContent: "space-around", flexDirection: "column"}}>
                <div>
                    <h1 >{items.title}</h1>
                    <p>{items.description}</p>
                </div>
                <div>
                    <Link to={IMAGE + '/' + items._id} className={styles.link_see_images}>
                        <img src={items.pointer} alt=""
                        className={styles.pointer_hand}/>
                        {items.click_text}</Link>
                </div>
            </div>
        </motion.div>
    );
};

export default CollectionItem;