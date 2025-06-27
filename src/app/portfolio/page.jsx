import React from 'react';
import styles from './page.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import WebDev from 'public/WebDev.jpg';
import MobileAppDev from 'public/MobileAppDev.jpg';
import ImgDev from 'public/ImgDev.jpg';

const Portfolio = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.categoryTitle}>Оберіть категорію</h1>
                <div className={styles.item}>
                    <Link
                        className={styles.link}
                        href="/portfolio/illustrations"
                    >
                        <Image
                            className={styles.img}
                            src={ImgDev}
                            alt="Img-Dev"
                            priority
                        />
                        <span className={styles.title}>Illustrations</span>
                    </Link>
                    <Link className={styles.link} href="/portfolio/websites">
                        <Image
                            className={styles.img}
                            src={WebDev}
                            alt="Websites Dev"
                            priority
                        />
                        <span className={styles.title}>Websites</span>
                    </Link>
                    <Link
                        className={styles.link}
                        href="/portfolio/applications"
                    >
                        <Image
                            className={styles.img}
                            src={MobileAppDev}
                            alt="MobileAppDev"
                            priority
                        />
                        <span className={styles.title}>Applications</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
