import React, {useState} from 'react';
import styles from "./clothes.module.scss";
import './filter_btn.scss'
import {ClothesBase} from "../../../utils/const_clothes.jsx";
import {motion} from "framer-motion";
import {AnimationCard, TextAnimation} from "../../../utils/const_animations.jsx";

const Clothes = () => {
    const clothesBasa = ClothesBase;
    const [open, setOpen] = useState(false);
    return (
        <main>
            <div className={styles.main_block}>
                {/*filter bar*/}
                <motion.div className={styles.filter_bar}
                            initial="hidden"
                            whileInView="visible"
                            variants={TextAnimation} custom={1}>
                    <div className={styles.filter_bar_btn}>
                        <div className={`bit_text_filter ${open ? 'active' : 'inactive'}`}
                             style={{display: "flex"}}
                             onClick={() => setOpen(!open)}>
                            <p>FILTERS</p>
                            <img src="/finter_btn.svg" alt=""/>
                        </div>
                    </div>
                    <div className={`big_menu_filter ${open ? 'active' : 'inactive'}`}>
                        <div className={styles.filter_bar_btn} style={{flexDirection: "column", marginBottom: "0"}}>
                            <div style={{display: "flex", margin: "0 auto"}}>
                                <p>TYPE OF</p>
                                <img src="/finter_btn.svg" alt=""/>
                            </div>
                        </div>
                        <div style={{margin: "0 15px 30px 15px" ,fontSize: "16px",
                            borderRadius: "0 0 25px 25px",
                            border: "1px solid #CF006B", padding: "10px"}}>
                            <div style={{display: "flex", justifyContent: "space-between", marginBottom: "8px"}}>
                                <p>All</p>
                                <input type="checkbox"/>
                            </div>
                            <div style={{display: "flex", justifyContent: "space-between", marginBottom: "8px"}}>
                                <p>T-Shirts</p>
                                <input type="checkbox"/>
                            </div>
                            <div style={{display: "flex", justifyContent: "space-between", marginBottom: "8px"}}>
                                <p>Skirts</p>
                                <input type="checkbox"/>
                            </div>
                            <div style={{display: "flex", justifyContent: "space-between", marginBottom: "8px"}}>
                                <p>Trousers</p>
                                <input type="checkbox"/>
                            </div>
                            <div style={{display: "flex", justifyContent: "space-between", marginBottom: "8px"}}>
                                <p>Hats</p>
                                <input type="checkbox"/>
                            </div>
                            <div style={{textAlign: "center"}}>
                                <p>More...</p>
                            </div>
                        </div>
                        <div className={styles.filter_bar_btn} style={{flexDirection: "column", marginBottom: "0"}}>
                            <div style={{display: "flex", margin: "0 auto"}}>
                                <p>STYLES</p>
                                <img src="/finter_btn.svg" alt=""/>
                            </div>
                        </div>
                        <div style={{margin: "0 15px 30px 15px" ,fontSize: "16px",
                            borderRadius: "0 0 25px 25px",
                            border: "1px solid #CF006B", padding: "10px"}}>
                            <div style={{display: "flex", justifyContent: "space-between", marginBottom: "8px"}}>
                                <p>All</p>
                                <input type="checkbox"/>
                            </div>
                            <div style={{display: "flex", justifyContent: "space-between", marginBottom: "8px"}}>
                                <p>Romantic</p>
                                <input type="checkbox"/>
                            </div>
                            <div style={{display: "flex", justifyContent: "space-between", marginBottom: "8px"}}>
                                <p>Retro</p>
                                <input type="checkbox"/>
                            </div>
                            <div style={{display: "flex", justifyContent: "space-between", marginBottom: "8px"}}>
                                <p>Soft</p>
                                <input type="checkbox"/>
                            </div>
                            <div style={{display: "flex", justifyContent: "space-between", marginBottom: "8px"}}>
                                <p>VISCO</p>
                                <input type="checkbox"/>
                            </div>
                            <div style={{textAlign: "center"}}>
                                <p>More...</p>
                            </div>
                        </div>
                        <div className={styles.filter_bar_btn} style={{flexDirection: "column", marginBottom: "0"}}>
                            <div style={{display: "flex", margin: "0 auto"}}>
                                <p>PRICE</p>
                                <img src="/finter_btn.svg" alt=""/>
                            </div>
                        </div>
                        <div style={{margin: "0 15px 30px 15px" ,fontSize: "16px",
                            borderRadius: "0 0 25px 25px", color: "#5de100",
                            border: "1px solid #CF006B", padding: "10px"}}>
                            <div style={{display: "flex", justifyContent: "space-around", marginBottom: "15px"}}>
                                <input type="text" name="" id=""
                                       placeholder="MIN" style={{maxWidth: "65px", borderRadius: "25px",
                                    padding: "3px 10px 3px 10px", border: "none"}}/>
                                <input type="text" name="" id=""
                                       placeholder="MAX" style={{maxWidth: "65px", borderRadius: "25px",
                                    padding: "3px 10px 3px 10px", border: "none"}}/>
                            </div>
                            <div style={{display: "flex", justifyContent: "space-between", marginBottom: "8px"}}>
                                <input type="checkbox"/>
                                <p>Less then $100</p>
                            </div>
                            <div style={{display: "flex", justifyContent: "space-between", marginBottom: "8px"}}>
                                <input type="checkbox"/>
                                <p>$100 - $350</p>
                            </div>
                            <div style={{display: "flex", justifyContent: "space-between", marginBottom: "8px"}}>
                                <input type="checkbox"/>
                                <p>$350 - $500</p>
                            </div>
                            <div style={{display: "flex", justifyContent: "space-between", marginBottom: "8px"}}>
                                <input type="checkbox"/>
                                <p>$500 - $1.000</p>
                            </div>
                            <div style={{display: "flex", justifyContent: "space-between", marginBottom: "8px"}}>
                                <input type="checkbox"/>
                                <p>$1.000 - $3.000</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <div className={styles.clothes_box}>
                    {
                        clothesBasa.length ? clothesBasa.map(item => (
                            <motion.div key={item.id} className={styles.clothes_item}
                                        initial="hidden"
                                        whileInView="visible"
                                        variants={AnimationCard}
                                        whileHover={{scale: 1.05}}>
                                <div style={{
                                    width: "51px", height: "45px", position: "relative", zIndex: "999", marginLeft: "auto",
                                    marginRight: "15px"}}>
                                    <img src="/heart.svg" alt=""/>
                                </div>
                                <div>
                                    <img src={`/clothes/${item.id}.svg`} alt=""
                                         style={{width: "268px", margin: "0 auto", borderRadius: "25px",
                                             marginTop: "-51px"}}/>
                                </div>
                                <div className={styles.description_box}>
                                    <h1>{item.title}</h1>
                                    <div className={styles.box_description_inf}>
                                        <div className={styles.box_colors} style={{padding: "3px"}}>
                                            <p>Colors:</p>
                                            <div style={{display: "flex", justifyContent: "space-between", width: "30%", alignItems: "center", marginLeft: "10px"}}>
                                                <div style={{backgroundColor: "red", width:"13px",height:"13px", borderRadius: "3px"}}></div>
                                                <div style={{backgroundColor: "white", width:"13px",height:"13px", borderRadius: "3px"}}></div>
                                                <div style={{backgroundColor: "blue", width:"13px",height:"13px", borderRadius: "3px"}}></div>
                                                <div style={{backgroundColor: "green", width:"13px",height:"13px", borderRadius: "3px"}}></div>
                                            </div>
                                        </div>
                                        <div style={{display: "flex", flexDirection: "column"}}>
                                            <div style={{padding: "3px", display: "flex"}}>
                                                <p>Rating: {item.rating}</p>
                                                <img src="/star.svg" alt=""/>
                                            </div>
                                            <div style={{display: "flex", padding: "3px"}}>
                                                <p>Price: </p>
                                                <div style={{color: "#5de100"}}>
                                                    {new Intl.NumberFormat("en-US", {style: "currency", currency: 'USD'}).format(item.price)}
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.button_card}>
                                            <button style={{cursor: "pointer"}}>
                                                <p style={{cursor: "pointer"}}>ADD TO BAG</p>
                                                <img src="/bag.svg" alt="" style={{marginLeft: "10px"}}/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )): <div>There are no items :(</div>
                    }
                </div>
            </div>
        </main>
    );
};

export default Clothes;