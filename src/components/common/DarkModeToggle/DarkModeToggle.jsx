'use client';
import React, { useContext } from 'react';
import styles from './darkModeToggle.module.scss';
import sun from 'public/svg/sun.svg';
import moon from 'public/svg/moon.svg';
import Image from 'next/image';
import { ThemeContext } from '../../../context/ThemeContext';

const DarkModeToggle = () => {
    const { toggle, mode } = useContext(ThemeContext);

    return (
        <div className={styles.container} onClick={toggle}>
            <div className={styles.icon}>
                <Image
                    className={styles.img}
                    fill={true}
                    src={sun}
                    alt="sun"
                    priority={true}
                />
            </div>
            <div className={styles.icon}>
                <Image
                    fill={true}
                    className={styles.img}
                    src={moon}
                    alt="moon"
                    priority={true}
                />
            </div>
            <div
                className={styles.ball}
                style={
                    mode === 'light'
                        ? { left: '1px' }
                        : { left: 'calc(100% - 19px)' }
                }
            />
        </div>
    );
};

export default DarkModeToggle;
