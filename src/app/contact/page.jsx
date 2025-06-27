import React from 'react';
import styles from './page.module.scss';
import Image from 'next/image';
import ContactBanner from 'public/contactBanner.png';
import Button from '@/components/common/Button/Button';

export const metadata = {
    title: 'Web Crafters Contact',
    description: 'This is contact page',
};

const Contact = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Є питання? Пишіть нам!</h1>
            <div className={styles.content}>
                <div className={styles.item}>
                    <Image
                        className={styles.img}
                        src={ContactBanner}
                        alt="Contact Banner"
                        priority
                    />
                </div>
                <form className={styles.item}>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder={`Ім'я`}
                    />
                    <input
                        className={styles.input}
                        type="email"
                        placeholder="E-mail"
                    />
                    <textarea
                        className={styles.textarea}
                        cols="30"
                        placeholder="Текст повідомлення"
                        rows="10"
                    ></textarea>
                    <Button text={'Відправити'} w={100} url={'/contact'} />
                </form>
            </div>
        </div>
    );
};

export default Contact;
