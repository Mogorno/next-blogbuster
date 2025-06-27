import React from 'react';
import styles from './button.module.scss';
import Link from 'next/link';

const Button = ({ text, url, w, type }) => {
    return (
        <>
            {url ? (
                <Link className={styles.container} href={url}>
                    <button
                        type={type ? type : 'button'}
                        style={w && { width: `${w}%` }}
                        className={styles.button}
                    >
                        {text}
                    </button>
                </Link>
            ) : (
                <button
                    type={type ? type : 'button'}
                    style={w && { width: `${w}%` }}
                    className={styles.button}
                >
                    {text}
                </button>
            )}
        </>
    );
};

export default Button;
