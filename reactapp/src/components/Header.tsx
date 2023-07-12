import React from 'react';
import Button from './Button';
import { ThemeContext } from '../context/ThemeContext';
import styles from '../styles/header.module.css';

type HeaderProps = {
    title: string;
    children?: React.ReactElement;
};

const Header: React.FC<HeaderProps> = ({ title, children }) => {
    const { theme, toggleTheme } = React.useContext(ThemeContext);
    const toggleThemeContext = () => {
        if (theme === 'light') {
            toggleTheme('dark');
        } else {
            toggleTheme('light');
        }
    };
    return (
        <header className={styles.headerSection}>
            <div className={styles.titleCont}>
                <h1>{title}</h1>
            </div>
            <Button title={theme === 'light' ? 'Dark' : 'Light'} variant={true} cb={() => toggleThemeContext()}></Button>
            {children}
        </header>
    );
};

export default Header;