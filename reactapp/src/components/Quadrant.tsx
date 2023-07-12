import React from 'react';
import styles from '../styles/quadrant.module.css';

type QuadrantProps = {
    title: string;
    theme?: string;
    children?: React.ReactNode;
};

const Quadrant: React.FC<QuadrantProps> = ({ title, theme, children }) => {
    return (
        <div className={`${styles.quadrant} ${theme}`}>
            <h2>{title}</h2>
            {children}
        </div>
    );
};

export default Quadrant;