import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import styles from '../styles/layout.module.css';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { theme } = useContext(ThemeContext);
    const headerChildren = React.Children.toArray(children)[0];
    const remainingChildren = React.Children.toArray(children).slice(1);
    return (
        <section className={`${styles.mainSection} ${theme === 'light' ? styles.light : styles.dark}`}>
            {headerChildren}
            {remainingChildren.length && (
                <main className={styles.gridCont}>
                    {remainingChildren}
                </main>
            )}
        </section>
    );
};

export default Layout;