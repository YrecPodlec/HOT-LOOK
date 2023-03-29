import React from 'react';
import Svg11 from '../../assets/images/images_for_pages/svg_waves/Контур 11.svg';
import Svg7 from '../../assets/images/images_for_pages/svg_waves/Контур 7.svg';
import Svg8 from '../../assets/images/images_for_pages/svg_waves/Контур 8.svg';
import Svg9 from '../../assets/images/images_for_pages/svg_waves/Контур 9.svg';
import Svg10 from '../../assets/images/images_for_pages/svg_waves/Контур 10.svg';
import Svg12 from '../../assets/images/images_for_pages/svg_waves/Контур 12.svg';
import Svg13 from '../../assets/images/images_for_pages/svg_waves/Контур 13.svg';
import Svg14 from '../../assets/images/images_for_pages/svg_waves/Контур 14.svg';
const SvgWave1 = () => {
    return (
        <div className="block_svg">
            <img src={Svg11} alt="" className="svg_line_1" style={{width: "100%", zIndex: "2"}}/>
            <img src={Svg10} alt="" className="svg_line_1" style={{width: "100%", position: "relative", top: "-12.75vw", zIndex: "0"}}/>
            <img src={Svg12} alt="" className="svg_line_1" style={{width: "100%", position: "relative", top: "-12.8vw", zIndex: "-1"}}/>
            <img src={Svg9} alt="" className="svg_line_1" style={{width: "100%", position: "relative", top: "-27.8vw", zIndex: "-2"}}/>
            <img src={Svg13} alt="" className="svg_line_1" style={{width: "100%", position: "relative", top: "-28.2vw", zIndex: "-3"}}/>
            <img src={Svg8} alt="" className="svg_line_1" style={{width: "100%", position: "relative", top: "-44.4vw", zIndex: "-4"}}/>
            <img src={Svg14} alt="" className="svg_line_1" style={{width: "100%", position: "relative", top: "-44.4vw", zIndex: "-5"}}/>
            <img src={Svg7} alt="" className="svg_line_1" style={{width: "100%", position: "relative", top: "-66.8vw", zIndex: "-6"}}/>
        </div>
    );
};

export default SvgWave1;