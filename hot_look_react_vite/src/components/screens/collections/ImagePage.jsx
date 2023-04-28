import React from 'react';
import TextComponent from "../../TextComponent/TextComponent.jsx";
import "../../../index.scss"
import {ImagesList} from "../../../utils/const_images.jsx";
import styles from './Collections.module.scss';

const ImagePage = () => {
    const image = ImagesList;
    return (
        <main className="mx-16 mb-72">
            <div className="my-36 w-3/5">
                <TextComponent itemId={5}/>
            </div>
            <div className={styles.image_box}>
                {
                    image.length ? image.map(item => (
                        <div key={item.id} className={styles.background_image_box}>
                                <div>
                                    <div
                                        className="w-72"
                                        style={{height: "453px", backgroundImage: `url(${item.photo})`,
                                        backgroundSize: "cover", borderRadius: "25px"}}>
                                    </div>
                                    <h1>{item.title}</h1>
                                    <p>
                                        {Intl.NumberFormat("en",
                                            {style: "currency", currency: "USD"}).format(item.price)}
                                    </p>
                                </div>
                        </div>
                    )) : <div>Error</div>
                }
            </div>
        </main>
    );
};

export default ImagePage;