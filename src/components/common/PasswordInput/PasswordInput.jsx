import React, { useState } from 'react';
import styles from './PasswordInput.module.scss';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

const PasswordInput = ({ text, pattern }) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleSetShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className={styles.inputBox}>
            <input
                className={styles.input}
                type={showPassword ? 'text' : 'password'}
                placeholder={text}
                pattern={pattern}
                required
            />
            <label
                onClick={handleSetShowPassword}
                className={styles.passwordLabel}
                htmlFor="checkbox"
            >
                {showPassword ? (
                    <AiFillEye className={styles.icon} />
                ) : (
                    <AiFillEyeInvisible className={styles.icon} />
                )}
            </label>
            <input style={{ display: 'none' }} id="checkbox" type="checkbox" />
        </div>
    );
};

export default PasswordInput;
