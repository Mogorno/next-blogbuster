import React from 'react';
import styles from './footer.module.scss';
import { BsTelegram, BsYoutube, BsGithub } from 'react-icons/bs';

export default function Footer() {
    return (
        <div className={styles.container}>
            <div>©2023 BlogBuster. All rights reserved</div>
            <div className={styles.social}>
                <div className={styles.icons}>
                    <BsTelegram />
                </div>
                <div className={styles.icons}>
                    <BsYoutube />
                </div>
                <div className={styles.icons}>
                    <BsGithub />
                </div>
            </div>
        </div>
    );
}
