import React, {useEffect, useState} from 'react';
import styles from './Collections.module.scss';
import TextComponent from "../../TextComponent/TextComponent.jsx";
import CollectionItem from "./CollectionItem.jsx";
import {CollectionsItems} from "../../../services/collections.service.jsx";
import '../../../index.scss';
const Collections = () => {
    const [item, setItems] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const data = await CollectionsItems.getAll()
            setItems(data)
        }
        fetchData()
    }, [])
    return (
        <main className='m-16'>
            {/*block1*/}
            <div>
                <div className='w-2/4'>
                    <div style={{marginTop: "145px"}}>
                        <TextComponent itemId={4}/>
                    </div>
                </div>
            </div>
            <div className={styles.box_collections_items}>
                {item.length ? item.map(items =>
                    <CollectionItem key={items.id} item={items}/>
                ):<div>There Are no items :(</div>}
            </div>
        </main>
    );
};

export default Collections;