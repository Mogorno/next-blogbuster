import React from 'react';
import styles from './page.module.scss';

const Layout = ({ children }) => {
    return (
        <div>
            <h1 className={styles.mainTitle}>Наші роботи</h1>
            {children}
        </div>
    );
};

export default Layout;
