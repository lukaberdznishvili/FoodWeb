
import Link from "next/link";
import classes from './main-header.module.css';
import Image from "next/image";
import logoImg from '@/assets/logo.png';
import MainHeaderBackground from "./main-header-background";

import NavLink from "./nav-link";


export default function MainHeader(){
    
    return(<>
    <MainHeaderBackground />
    
        <header className={classes.header}>
            <Link className={classes.logo} href="/">
                <Image src={logoImg} alt="food" priority />
                Next Level Food
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li className={classes.gela}>
                        <NavLink href="/meals">Browse Meals</NavLink>
                    </li>
                    <li className={classes.gela}>
                        <NavLink href="/comunity">Foodies Community</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    </>)
}