import React from 'react';
import Layout from './components/Layout';
import Header from './components/Header';
import Nav from './components/Nav';
import Quadrant from './components/Quadrant';
import { ThemeProvider } from './context/ThemeContext';
import styles from './styles/quadrant.module.css';

const App = () => {
    return (
        <ThemeProvider>
            <Layout>
                <Header title='Justin Booth' />
                <Quadrant title='Projects' theme={styles.spring} />
                <Quadrant title='Experience' theme='summer' />
                <Quadrant title='About Me' theme='fall' />
                <Quadrant title='Contact Me' theme='winter' />
            </Layout>
        </ThemeProvider>
    );
};

export default App;

