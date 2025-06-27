'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import styles from './postPreview.module.scss';
import { CiImageOn } from 'react-icons/ci';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

const PostPreview = ({ postData, selectImg }) => {
    const [imgShow, setImgShow] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <div
                    style={imgShow ? { width: '100%' } : { width: '25%' }}
                    className={styles.imgContent}
                >
                    {selectImg ? (
                        <Image
                            src={selectImg}
                            alt="Preview Post Img"
                            priority={true}
                            fill={true}
                            className={styles.img}
                        />
                    ) : (
                        <CiImageOn className={styles.icon} />
                    )}
                </div>
                <button
                    onClick={() => setImgShow(!imgShow)}
                    className={styles.btn}
                >
                    {imgShow ? <AiFillEye /> : <AiFillEyeInvisible />}
                </button>
            </div>

            <h1 className={styles.title}>
                {postData.title ? postData.title : 'Заголовок'}
            </h1>
            <p className={styles.description}>
                {postData.description ? postData.description : 'Короткий опис'}
            </p>
            <p className={styles.content}>
                {postData.content ? (
                    postData.content
                ) : (
                    <>
                        Вміст посту <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Optio nemo, quos eius repellat possimus dolor aspernatur
                        vel nam molestias assumenda natus, blanditiis aperiam
                        explicabo maxime illo excepturi, quaerat omnis
                        accusantium.
                    </>
                )}
            </p>
        </div>
    );
};

export default PostPreview;
