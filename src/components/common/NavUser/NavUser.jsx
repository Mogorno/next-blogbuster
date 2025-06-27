import React from 'react';
import styles from './navUser.module.scss';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

const NavUser = () => {
    const session = useSession();
    if (session.status !== 'authenticated') return;
    const user = session.data.user;

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                {user.img ? (
                    <Image
                        alt={`User ${user.name} img`}
                        className={styles.img}
                        src={user.img}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        fill
                        priority
                    />
                ) : (
                    <div className={styles.icon}>{user.name?.[0]}</div>
                )}
            </div>
            <div className={styles.text}>
                <span className={styles.name}>{user.name}</span>
                <button className={styles.logout} onClick={signOut}>
                    Вийти
                </button>
            </div>
        </div>
    );
};

export default NavUser;
