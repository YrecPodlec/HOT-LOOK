import React from 'react';
import { text_component } from "../../utils/consts_text.jsx";
import styles from "./textcomponent.module.scss";
const TextComponent = ({ itemId }) => {
    const textItem = text_component.find(item => item.id === itemId);
    return (
        <div className={styles.hotlook_text}>
            {textItem ? (
                <div key={textItem.id}>
                    <h1>{textItem.title}</h1>
                    <p>{textItem.text}</p>
                </div>
            ) : (
                <div>NONE</div>
            )}
        </div>
    );
};

export default TextComponent;
