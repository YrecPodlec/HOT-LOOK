import React from 'react';
import styles from './choose.module.scss';
import {questions} from "../../../utils/const_questions.jsx";
import {Checkbox} from "@mui/material";
import { pink } from '@mui/material/colors';
const ChooseStyle = () => {
    const question_box_big = questions;
    return (
        <main>
            {/*title*/}
            <div className={styles.title_box}>
                <h1>CHOOSE STYLE</h1>
                <p>
                    Fill out the form with the test so that on the slider on the right, all items are marked as
                    completed
                    <br/>
                    The result will bring you back the style that is most suitable for you
                    <br/><br/>
                </p>
                <p style={{color: "white"}}>(Please! You should choose only 1 object!)</p>
            </div>
            {/*block 1*/}
            <div>
                {/*text*/}
                <div className={styles.block_question}>
                    {
                        question_box_big.length ? question_box_big.map(item => (
                            <div key={item.id} className={styles.question_box_big}>
                                <h1>{item.id}. {item.title}</h1>
                                <div className={styles.questions_input} style={{flexDirection: `${item.flex}`, justifyContent: "space-between"}}>
                                    {
                                        item.text.length ? item.text.map(item_p => (
                                            <div key={item_p.id}>
                                                <div style={{
                                                    width: `${item_p.size}`, height: `${item_p.size}`, borderRadius: "25px",
                                                    backgroundImage: `url(${item_p.photo})`, backgroundSize: "cover"
                                                }}>
                                                    <Checkbox
                                                        sx={{
                                                            '& .MuiSvgIcon-root': { fontSize: 32 },
                                                            color: pink[800],
                                                            '&.Mui-checked': {
                                                                color: pink[600],
                                                            },
                                                        }}
                                                           style={{
                                                               cursor: "pointer", position: "relative",
                                                               width: "100%"
                                                           }}/>
                                                </div>
                                                <p>{item_p.text_box}</p>
                                            </div>
                                        )) : <div>There are no text :(</div>
                                    }
                                </div>
                            </div>
                        )) : <div>There are no items :(</div>
                    }
                    <div>
                        <button className={styles.btn_sub}>FIND OUT THE STYLE</button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ChooseStyle;