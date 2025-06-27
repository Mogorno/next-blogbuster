'use client';
import React, { useState } from 'react';
import styles from './page.module.scss';
import Link from 'next/link';
import Button from '@/components/common/Button/Button';
import PasswordInput from '@/components/common/PasswordInput/PasswordInput';
import { useRouter } from 'next/navigation';
import ImgInput from '@/components/common/ImgInput/ImgInput';
import axios from '@/utils/axios';

const Register = () => {
    const [error, setError] = useState(false);

    const [selectImg, setSelectImg] = useState('');
    const [selectFile, setSelectFile] = useState(null);

    const patterns = {
        name: /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ\s'\-]{3,20}$/.source,
        password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,30}$/.source,
    };

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[4].value;
        const confirmedPassword = e.target[6].value;

        if (confirmedPassword !== password || password.length < 6) return;

        try {
            const formData = new FormData();

            formData.append('name', name);
            formData.append('email', email);
            formData.append('password', password);

            if (selectFile) {
                formData.append('img', selectFile, selectFile.name);
            }

            const res = await axios.post('/api/auth/register', formData);

            res.status === 201 &&
                router.push(
                    '/dashboard/login?success=Account has been created'
                );
        } catch (err) {
            setError(true);
        }
    };
    return (
        <div className={styles.container}>
            <h1>Реєстрація</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Введіть ім'я"
                    required
                />
                <input
                    className={styles.input}
                    type="email"
                    placeholder="E-mail"
                    required
                />
                <ImgInput
                    selectImg={selectImg}
                    setSelectImg={setSelectImg}
                    selectFile={selectFile}
                    setSelectFile={setSelectFile}
                />

                <PasswordInput
                    pattern={patterns.password}
                    text={'Введіть пароль'}
                />

                <PasswordInput
                    pattern={patterns.password}
                    text={'Підтвердіть пароль'}
                />

                <Button
                    url={undefined}
                    type={'submit'}
                    w={100}
                    text={'Зареєструватися'}
                />
            </form>
            {error && 'Виникла помилка, спробуйте ще.'}
            <span>
                Або увійдіть в існуючий обліковий запис.{' '}
                <Link className={styles.link} href="/dashboard/login">
                    Увійти
                </Link>
            </span>
        </div>
    );
};

export default Register;
