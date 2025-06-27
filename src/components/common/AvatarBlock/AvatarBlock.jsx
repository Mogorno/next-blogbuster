'use client';
import React from 'react';
import styles from './avatarBlock.module.scss';
import Image from 'next/image';

const AvatarBlock = ({ src, alt, user }) => {
    const avatarOptions =
        user && user.img ? { alt: user.name, src: user.img } : { alt, src };

    return (
        <div className={styles.container}>
            <div className={styles.avatarContainer}>
                <Image
                    priority={true}
                    width={100}
                    height={100}
                    className={styles.avatar}
                    {...avatarOptions}
                />
            </div>
            {user ? <small className={styles.user}>{user.name}</small> : ''}
        </div>
    );
};

export default AvatarBlock;
