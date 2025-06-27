'use client';
import React from 'react';
import styles from './imgInput.module.scss';
import Image from 'next/image';
import { FcAddImage, FcRemoveImage, FcEditImage } from 'react-icons/fc';

const ImgInput = ({ selectImg, setSelectImg, selectFile, setSelectFile }) => {
    const handleImgChange = (e) => {
        if (e.target.files) {
            const file = e.target.files[0];
            setSelectImg(URL.createObjectURL(file));
            setSelectFile(file);
        }
    };

    const handleRemoveImage = () => {
        setSelectImg('');
        setSelectFile(null);
    };

    return (
        <label className={styles.label}>
            <input onChange={handleImgChange} hidden type="file" />
            <div className={styles.content}>
                {selectImg ? (
                    <>
                        <div className={styles.imgContainer}>
                            <Image
                                className={styles.image}
                                alt="new Post Img"
                                src={selectImg}
                                fill={true}
                            />
                            {selectFile && (
                                <button
                                    onClick={handleRemoveImage}
                                    className={styles.button}
                                >
                                    <FcRemoveImage className={styles.icon} />
                                </button>
                            )}
                        </div>
                        <div className={styles.iconContainer}>
                            <FcEditImage className={styles.icon} />
                            <span className={styles.text}>
                                Змінити зображення
                            </span>
                        </div>
                    </>
                ) : (
                    <div className={styles.iconContainer}>
                        <FcAddImage className={styles.icon} />
                        <span className={styles.text}>Додати зображення</span>
                    </div>
                )}
            </div>
        </label>
    );
};

export default ImgInput;
