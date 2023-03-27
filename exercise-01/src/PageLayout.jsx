import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./PageLayout.module.css"

export default function PageLayout() {
    return (
        <React.Fragment>
            <Header />
            <div className="container">
                <Outlet />
            </div>
            <Footer />
        </React.Fragment>
    )
};

function Header() {
    return (
        <header className={styles.header}>
            <h2>APP</h2>
            <NavLink to="." className={({ isActive }) => isActive ? styles.activeLink : undefined}>Home</NavLink>
            <NavLink to="about" className={({ isActive }) => isActive ? styles.activeLink : undefined}>About</NavLink>
        </header>
    )
};

function Footer() {
    return (
        <footer className={styles.footer}>
            <hr />
            <p>copy right @ purina</p>
        </footer>
    )
};