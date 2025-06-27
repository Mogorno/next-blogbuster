'use client';
import { signIn, useSession } from 'next-auth/react';
import styles from './page.module.scss';
import React, { useState } from 'react';
import PasswordInput from '@/components/common/PasswordInput/PasswordInput';
import Button from '@/components/common/Button/Button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Login = () => {
    const [error, setError] = useState(false);

    const session = useSession();

    const router = useRouter();

    if (session.status === 'loading') {
        return <p>Loading...</p>;
    }
    if (session.status === 'authenticated') {
        router?.push('/dashboard');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        signIn('credentials', { email, password });
    };
    return (
        <div className={styles.container}>
            <h1>Вхід</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    className={styles.input}
                    type="email"
                    placeholder="E-mail"
                    required
                />

                <PasswordInput text={'Пароль'} />

                <Button
                    url={undefined}
                    type={'submit'}
                    w={100}
                    text={'Увійти'}
                />
            </form>
            {error && 'Виникла помилка, спробуйте ще.'}
            <span>
                Якщо у вас нема облікосого запису, створіть його!{' '}
                <Link className={styles.link} href="/dashboard/register">
                    Зареєструватися
                </Link>
            </span>
            {/* <button onClick={() => signIn('google')} className={styles.btn}>
                Google
            </button> */}
        </div>
    );
};

export default Login;
