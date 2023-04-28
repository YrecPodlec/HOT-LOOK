import React from 'react';
import styles from './Collections.module.scss'
import {Link} from "react-router-dom";
import {IMAGE} from "../../../utils/consts.jsx";
const CollectionItem = ({item}) => {
    return (
        <div key={item.id} className={styles.collection_card}>
            <img src={item.photo} alt={item.photo} height="400" width="282"/>
            <div style={{display: "flex", justifyContent: "space-around", flexDirection: "column"}}>
                <div>
                    <h1 >{item.title}</h1>
                    <p>{item.description}</p>
                </div>
                <div>
                    <Link to={IMAGE} className={styles.link_see_images}>
                        <img src={item.pointer} alt=""
                        className={styles.pointer_hand}/>
                        {item.click}</Link>
                </div>
            </div>
        </div>
    );
};

export default CollectionItem;