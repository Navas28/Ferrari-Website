import style from "./Navbar.module.css";
import logo from "../../assets/ferrari-logo-Photoroom.png";

const Navbar = () => {
    return (
        <div className={style.navbar}>
            <div className={style.logoContainer}>
                <img src={logo} alt="logo" className={style.navLogo} />
                <span className={style.brandName}>FERRARI</span>
            </div>
            <ul className={style.navList}>
                <li>HOME</li>
                <li>EXPLORE</li>
                <li>ABOUT</li>
                <li className={style.navContact}>CONTACT</li>
            </ul>
        </div>
    );
};

export default Navbar;
