import React, {useEffect, useState} from 'react';
import SvgWave1 from '../components/svgs/svg_wave_1.jsx'
const Home = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])
    return (
        <div className="main_home_page" style={{overflow: "hidden"}}>
            {/*BLOCK 1*/}
            <div className="home_block1 home_page_block">
                {/*BLOCK INTO BLOCK 1*/}
                <div className="block_into_block1">
                    {/*BLOCK 1 RIGHT*/}
                    <div className="block_1_block1_home home_blocks_lr">
                        <div className="text_home_block_1"
                             style={{transform: `translateX(-${offsetY *0.6}px)`}}
                        >
                            <h1>HOT LOOK</h1>
                            <p>
                                From casual to elegant, HOT LOOK has a
                                wide range of clothing styles that
                                cater to every woman's taste, so explore
                                our collection today and discover your
                                perfect outfit for any occasion
                            </p>
                            <a href="">
                                Yuri Verbitsky Corp
                            </a>
                        </div>
                    </div>
                    {/*BLOCK 1 LEFT*/}
                    <div className="block_1_block2_home home_blocks_lr"
                    style={{zIndex: -10}}>
                        <div className="girl_box"
                             style={{transform: `translateX(${offsetY *0.4}px)`}}
                        >
                            <div className="girl_box_img" style={{zIndex: "-7"}}></div>
                        </div>
                    </div>
                </div>
                {/*SVG WAVE*/}
                <div style={{position: "absolute"}}>
                    <SvgWave1/>
                </div>
            </div>
            {/*BLOCK 2*/}
            <div className="home_block2 home_page_block" style={{height: "100vh"}}>

            </div>
        </div>
    );
};
// d="M-75.947,933.945s164.8-107.546,271.524-98.4,158.5,19.224,271.391,134.171,243.947,173.812,429.957,44.343,359.822-120.576,445.2-80.115,222.6,203.486,426.907,115.056,57.8,14.26,125.538-24.74,48.057-24.231,48.991,7.535,0,24.47,0,48.2,6.144,42.786-10.277,42.786H1599l-1149.067,5.887s-93.867-1.766-183.307-3.37c-69.022-1.238-135.467-2.379-153.036-2.517-40.2-.316-101.9,8.211-143.769-11.7s-45.277-18.686-45.763-97.022S-75.947,933.945-75.947,933.945Z"
export default Home;