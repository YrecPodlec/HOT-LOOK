import React, {useRef} from 'react';
import styles from './information.module.scss';
import { motion } from 'framer-motion';
import { WaveAnimation } from '../../../utils/const_animations.jsx';
import GallaryComponent from "./GallaryComponent.jsx";
import './gallery.scss'
import {Button, FormControl, FormControlLabel, Radio, RadioGroup} from "@mui/material";
import {pink} from "@mui/material/colors";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Information = () => {
    const myRef = useRef(null)
    const executeScroll = () => myRef.current.scrollIntoView()
    return (
        <main style={{overflow: "hidden"}}>
            {/*first block*/}
            <div className={styles.first_block}>
                <div className={styles.block_into_first_block_observ}>
                    <div className={styles.text_block_inform}>
                        <div className={styles.text_block_inform_text}>
                            <h1>INFORMATION ABOUT US</h1>
                            <p>
                                Below is detailed information about HOT LOOK
                                <br/><br/>
                                You can get acquainted with who we are and
                                how we work, and you can also read our
                                articles or contact us for cooperation!
                            </p>
                        </div>
                    </div>
                    <div className={styles.box_girl_img_info}>
                        <img src="/information_girl.svg" alt=""/>
                    </div>
                </div>
            </div>
            <motion.img src="/wave 1.svg" alt=""
                        initial="hidden"
                        whileInView="visible"
                        variants={WaveAnimation}
                        viewport={{ once: true }}
                        style={{
                            width: "100vw",
                            position: "relative",
                            top: "-20vh"
                        }}/>
            {/*block hot look team*/}
            <div className={styles.hot_look_team_first_block}>
                <div className={styles.text_block_team}>
                    <h1>HOT LOOK TEAM</h1>
                    <p>
                        HOT LOOK was formed because of a burning desire to make the world a better place, to make
                        the world and people more creative, bringing various vivid images in clothing styles to life!
                    </p>
                </div>
                {/*GALLERY*/}
                <GallaryComponent/>
            </div>
            {/*CONTACT*/}
            <div className={styles.block_contact_us} ref={myRef}>
                <h1>CONTACT US</h1>
            </div>
            {/*BIG BLOCK*/}
            <div className={styles.contact_us_big_block_3}>
                <div className={styles.block_into_block_3_contacts}>
                    <div>
                        <h1>YOU CAN BECOME ONE OF US!</h1>
                        <p>If you are purposeful, positive and confident,
                            ready to implement your amazing ideas into
                            life, then in our team, you will definitely
                            work together!</p>
                        <p>
                            Our manager will answer you
                            as soon as possible

                            If you have a great offer or you want to get
                            a job with us, we will consider you as a
                            candidate and invite you for an interview
                        </p>
                    </div>
                </div>
                <div className={styles.block_into_block_3_contacts}>
                    <div className={styles.inputs_blocks}>
                        <input type="text" placeholder="YOUR NAME" name="" id=""/>
                        <input type="text" placeholder="YOUR SURNAME" name="" id=""/>
                        <FormControl>
                            <h2>YOUR GENDER:</h2>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group" row>
                                <FormControlLabel value="female" control={<Radio sx={{
                                                                                     color: pink[800],
                                                                                     '&.Mui-checked': {
                                                                                         color: pink[600],
                                                                                     },
                                                                                 }}/>} label="Female" />
                                <FormControlLabel value="male" control={<Radio sx={{
                                    color: pink[800],
                                    '&.Mui-checked': {
                                        color: pink[600],
                                    },
                                }}/>} label="Male" />
                                <FormControlLabel value="other" control={<Radio sx={{
                                    color: pink[800],
                                    '&.Mui-checked': {
                                        color: pink[600],
                                    },
                                }}/>} label="Other" />
                            </RadioGroup>
                            <h2>YOU ARE:</h2>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group" row>
                                <FormControlLabel value="CUSTOMER" control={<Radio sx={{
                                                                                     color: pink[800],
                                                                                     '&.Mui-checked': {
                                                                                         color: pink[600],
                                                                                     },
                                                                                 }}/>} label="CUSTOMER" />
                                <FormControlLabel value="LOOKING FOR JOB" control={<Radio sx={{
                                    color: pink[800],
                                    '&.Mui-checked': {
                                        color: pink[600],
                                    },
                                }}/>} label="LOOKING FOR JOB" />
                                <FormControlLabel value="INVESTOR" control={<Radio sx={{
                                    color: pink[800],
                                    '&.Mui-checked': {
                                        color: pink[600],
                                    },
                                }}/>} label="INVESTOR" />
                            </RadioGroup>
                        </FormControl>
                        <div className={styles.btn_resume}>
                            <p>Add a file here in PDF please!</p>
                            <Button variant="contained" color="success">
                                <p>Resume</p> <CloudUploadIcon/>
                            </Button>
                        </div>
                        <h2>Your Message Here:</h2>
                        <textarea name="textarea" placeholder="Your Message Here:"/>
                        <Button variant="contained" color="warning">
                            SEND
                        </Button>
                    </div>
                </div>
            </div>
            <div className={styles.block_4_contacts}>
                <div className={styles.block_into_contact_block}>
                    <h1>Or you can use our
                        Contacts:</h1>
                    <div className={styles.contact_icon_block}>
                        <MailIcon sx={{ fontSize: 40 }}/>
                        <p>hotlook_inc@gmail.com</p>
                    </div>
                    <div className={styles.contact_icon_block}>
                        <LocalPhoneIcon sx={{ fontSize: 40 }}/>
                        <p>+1 800 371 5465</p>
                    </div>
                    <div className={styles.contact_icon_block}>
                        <InstagramIcon sx={{ fontSize: 40 }}/>
                        <p>hotlook_inst</p>
                    </div>
                    <div className={styles.contact_icon_block}>
                        <FacebookIcon sx={{ fontSize: 40 }}/>
                        <p>hotlook_posts</p>
                    </div>
                    <div className={styles.contact_icon_block}>
                        <PinterestIcon sx={{ fontSize: 40 }}/>
                        <p>hotlook_imagion</p>
                    </div>
                </div>
                <div className={styles.block_into_contact_block}>
                    <div className={styles.block_right_contcts}>
                        <h1>Where is our main office?</h1>
                        <br/><br/>
                        <h2>ADRESS:</h2>
                        <p>900 Wilshire Blvd, Los Angeles, CA 90017, US</p>
                        <br/><br/>
                        <p>You can easily find our office at the specified
                            address, overlooking WESTLAKE. We have
                            chosen exactly such a room to make it
                            comfortable for both our clients and our
                            investors</p>
                    </div>
                </div>
            </div>
            <motion.img src="/wave 2.svg" alt=""
                        initial="hidden"
                        whileInView="visible"
                        variants={WaveAnimation}
                        style={{
                            width: "100vw",
                            position: "relative"
                        }}/>
            <div className={styles.articles_block}>
                <div className={styles.block_article}>
                    <div className={styles.article_block_into}>
                        <h1>OUR ARTICLES</h1>
                        <img src="/articles/1.svg" alt=""/>
                    </div>
                    <div className={styles.article_block_into}>
                        <h2>1. Why is it important to
                            dress properly?</h2>
                        <p>
                            Dressing properly is important for several
                            reasons. First, it is a way to show respect for
                            ourselves and others. When we dress
                            appropriately, we demonstrate that we take
                            ourselves and our environment seriously
                            <br/>
                            <br/>
                            Second, dressing properly can affect how
                            others perceive us and how we are treated.
                            Studies have shown that people who dress
                            professionally are often viewed as more
                            competent, trustworthy, and capable
                            <br/>
                            <br/>
                            Third, dressing properly can boost our
                            confidence and self-esteem, which can have
                            a positive impact on our performance and
                            overall well-being. Finally, certain settings and
                            occasions require appropriate attire, and
                            failing to dress properly in these situations can
                            lead to social and professional consequences
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.articles_block}>
                <div className={styles.block_article}>
                    <div className={styles.article_block_into}>
                        <h2>2. What is HOT LOOK?</h2>
                        <p>HOT LOOK is a clothing website that offers a
                            wide variety of clothing styles for customers to
                            choose from.
                            <br/>
                            <br/>
                            Our team is dedicated to creating
                            unique and fashionable clothing made from the
                            highest quality materials
                            <br/>
                            <br/>
                            We believe in making the world a better and
                            more creative place through our clothing, and
                            we strive to provide our customers with the
                            best possible experience
                            <br/>
                            <br/>
                            With HOT LOOK, you can dress to impress and
                            feel confident in your style
                            <br/>
                            <br/>
                            We cooperate with other companies and can
                            give you the opportunity to buy an image of a
                            character from movies or games, a special
                            offer is also provided when ordering to make
                            your purchase more pleasant</p>
                    </div>
                    <div className={styles.article_block_into}>
                        <img src="/articles/2.svg" alt=""/>
                    </div>
                </div>
            </div>
            <div className={styles.articles_block}>
                <div className={styles.block_article}>
                    <div className={styles.article_block_into}>
                        <img src="/articles/3.svg" alt=""/>
                    </div>
                    <div className={styles.article_block_into}>
                        <h2>3. How we are working?</h2>
                        <p>
                            At our studio, we work with the best designers
                            of clothes and tailors to bring you the latest
                            and most stylish designs
                            <br/>
                            <br/>
                            We use materials that are not only fashionable
                            but also resistant to washing, ensuring that
                            your clothes will last for a long time
                            <br/>
                            <br/>
                            Our working hours are from 10 am to
                            6 pm Los Angeles time, so we're always
                            available to help you find the perfect outfit
                            <br/>
                            <br/>
                            We strive to provide you with the highest
                            quality products and excellent customer
                            service
                            <br/>
                            <br/>
                            Also, we work in a pleasant office, with a
                            pleasant and interesting pastime in a pleasant
                            team
                        </p>
                    </div>
                </div>
            </div>
            <motion.img src="/wave 1.svg" alt=""
                        initial="hidden"
                        whileInView="visible"
                        variants={WaveAnimation}
                        viewport={{ once: true }}
                        style={{
                            width: "100vw",
                            position: "relative",
                            top: "-20vh"
                        }}/>
            <div className={styles.any_quastions_block}>
                <div className={styles.block_into_questions}>
                    <h1>DO YOU HAVE ANY QUESTIONS?</h1>
                    <p>If you still have questions, you can use our
                        contacts, or send a completed form where you
                        can offer cooperation or ask a question by
                        going to this section:</p>
                    <div className={styles.btn_contacts_questions}>
                        <p>Our specialists will answer you as soon as
                            possible!</p>
                        <div style={{display: "flex", marginTop: "24px"}}>
                            <p>CONTACT US - </p>
                            <motion.button onClick={executeScroll}
                                           style={{
                                               backgroundColor: "rgba(0, 0, 0, 0)",
                                               border: "none", color: "white"}}
                                           whileHover={{scale: 1.15}} whileTap={{scale: 0.9}}>
                                <img src="/rowUp.svg" alt=""
                                     style={{width: "36px"}}/>
                            </motion.button>
                        </div>
                    </div>
                </div>
                <div className={styles.block_into_questions}>
                    <img src="/articles/4.svg" alt=""/>
                </div>
            </div>
        </main>
    );
};

export default Information;