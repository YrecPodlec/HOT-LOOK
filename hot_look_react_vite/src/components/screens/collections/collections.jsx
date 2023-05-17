import React, {useContext, useEffect, useState} from 'react';
import styles from './Collections.module.scss';
import TextComponent from "../../TextComponent/TextComponent.jsx";
import CollectionItem from "./CollectionItem.jsx";
import {CollectionsItems} from "../../../services/collections.service.jsx";
import '../../../index.scss';
import {motion} from "framer-motion";
import {AllCollections} from "../../../http/getImages.jsx";
import {observer} from "mobx-react-lite";
import {Context} from "../../../main.jsx";
import {CircularProgress} from "@mui/material";

const Collections = observer(() => {
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
    const {items} = useContext(Context)
    const [item, setItems] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const data = await CollectionsItems.getAll()
            setItems(data)
        }
        fetchData()
        AllCollections().then(data => items.setCollections(data))
    }, [])
    return (
        <main style={{marginBottom: "288px"}}>
            {/*block1*/}
            <motion.div initial="hidden"
                        whileInView="visible"
                        variants={TextAnimation}>
                <div style={{width: "60%", marginLeft: "65px"}}>
                    <div style={{marginTop: "145px"}}>
                        <TextComponent itemId={4}/>
                    </div>
                </div>
            </motion.div>
            <div className={styles.box_collections_items}>
                {item.length ? item.map(items =>
                    <CollectionItem key={items.id} items={items}/>
                ):<div style={{display: "flex", flexDirection: "column"}}>
                    <CircularProgress color="secondary"/>
                    <p>LOADING...</p></div>}
            </div>
        </main>
    );
});

export default Collections;