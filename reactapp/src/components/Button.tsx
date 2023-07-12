import React from 'react';
import styles from '../styles/button.module.css';
import { SvgDefs, SvgFilter } from '../utilities/Utils';

type ButtonProps = {
    title: string;
    variant?: boolean;
    cb: () => void;
};

const Button: React.FC<ButtonProps> = ({ title, variant = false, cb }) => {
    return (
        <button className={styles.themeToggle} onClick={() => cb()}>{title}</button>
    );
};

export default Button;