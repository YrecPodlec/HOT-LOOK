import React, {useState} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import '../styles/navbar.scss';
import {AnimatePresence, motion} from 'framer-motion'
import {
    ACCOUNT,
    CHOOSE_STYLE,
    CLOTHES,
    COLLABORATIONS,
    COLLECTIONS,
    HOME,
    INFORMATION,
    LOGIN
} from "../utils/consts.jsx";
const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [burger_class, setBurger] = useState('burger-bar unclicked');
    const isOpen = () => {
        setOpen(!open);
        if (!open){
            setBurger('burger-bar clicked');
        }else{
            setBurger('burger-bar unclicked');
        }
    }
    const item={
        exit:{
            opacity:0,
            height: 0,
            transition:{
                ease:"easeInOut",
                duration: 0.3,
                delay:.2
            }
        }
    }
    return (
        <>
            <Navbar bg="none" variant="dark" className="component_css"
                    style={{maxWidth: "100%"}}>
                <Container className="m-0 p-0" style={{maxWidth: "100%"}}>
                    <Nav className="m-0 p-0">
                        <Nav.Link className="p-0" href={HOME}>
                            <div className="logo"></div>
                        </Nav.Link>
                    </Nav>
                    <Nav className="navigation_pc">
                        <motion.div
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                        ><Nav.Link className="me-2 ms-2 link_navbar" href={COLLECTIONS}>COLLECTIONS</Nav.Link></motion.div>
                        <motion.div
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                        ><Nav.Link className="me-2 ms-2 link_navbar" href={CLOTHES}>CLOTHES</Nav.Link></motion.div>
                        <motion.div
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                        ><Nav.Link className="me-2 ms-2 link_navbar" href={COLLABORATIONS}>COLLABORATIONS</Nav.Link></motion.div>
                        <motion.div
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                        ><Nav.Link className="me-2 ms-2 link_navbar" href={CHOOSE_STYLE}>CHOOSE STYLE</Nav.Link></motion.div>
                        <motion.div
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                        ><Nav.Link className="me-2 ms-2 link_navbar" href={INFORMATION}>INFORMATION</Nav.Link></motion.div>
                        <motion.div
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                        ><Nav.Link className="ms-2 link_navbar" href={LOGIN}>LOGIN</Nav.Link></motion.div>
                    </Nav>
                    <div className="burger-menu" style={{cursor: 'pointer'}} onClick={isOpen}>
                        <div className={burger_class}></div>
                        <div className={burger_class}></div>
                        <div className={burger_class}></div>
                    </div>
                </Container>
            </Navbar>
            <AnimatePresence>
            {open &&(
                    <motion.div className="navbar_menu_adapt" variants={item}
                    initial={{opacity:0, height: 0}}
                    animate={{height:"auto", opacity:1}}
                    transition={{duration:.3}}
                    exit="exit">
                        <Nav className="navbar_list_menu" style={{overflow: "hidden"}}>
                            <div className="block_nav_menu">
                                <Nav.Link className="link_navbar_menu" href={COLLECTIONS}>COLLECTIONS</Nav.Link>
                                <Nav.Link className="link_navbar_menu" href={CLOTHES}>CLOTHES</Nav.Link>
                                <Nav.Link className="link_navbar_menu" href={COLLABORATIONS}>COLLABORATIONS</Nav.Link>
                            </div>
                            <div className="block_nav_menu">
                                <Nav.Link className="link_navbar_menu" href={CHOOSE_STYLE}>CHOOSE STYLE</Nav.Link>
                                <Nav.Link className="link_navbar_menu" href={INFORMATION}>INFORMATION</Nav.Link>
                                <Nav.Link className="link_navbar_menu" href={LOGIN}>LOGIN</Nav.Link>
                            </div>
                        </Nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default NavBar;