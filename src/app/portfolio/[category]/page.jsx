import React from 'react';
import styles from './page.module.scss';
import Image from 'next/image';

const Category = ({ params }) => {
    return (
        <div className={styles.container}>
            <h1>{params.category}</h1>
            <div className={styles.item}>
                <div className={styles.content}>asd</div>
                <div className={styles.imgContainer}>
                    <Image />
                </div>
            </div>
        </div>
    );
};

export default Category;
