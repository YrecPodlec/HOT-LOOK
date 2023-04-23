import React from 'react';
import styles from './Collections.module.scss';
import TextComponent from "../../TextComponent/TextComponent.jsx";
import CollectionItem from "../../CollectionItem.jsx";
const Collections = () => {
    return (
        <main className={styles.mainBox}>
            {/*block1*/}
            <div>
                <div className={styles.textComp}>
                    <div style={{marginTop: "145px"}}>
                        <TextComponent itemId={4}/>
                    </div>
                </div>
            </div>
            <CollectionItem/>
        </main>
    );
};

export default Collections;