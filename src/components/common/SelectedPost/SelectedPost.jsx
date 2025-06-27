import React from 'react';
import styles from './selectedPost.module.scss';
import Image from 'next/image';
import { AiOutlineClose } from 'react-icons/ai';

const SelectedPost = ({ post, setPost }) => {
    const handleDeletePost = () => {
        setPost(null);
    };
    return (
        <>
            {post ? (
                <div className={styles.container}>
                    <h1 className={styles.h1}>Редагування посту</h1>

                    <div className={styles.content}>
                        <div className={styles.imgContainer}>
                            <Image
                                fill={true}
                                className={styles.image}
                                alt="Edit Post Img"
                                src={post.img}
                            />
                        </div>
                        <div className={styles.text}>
                            <h3 className={styles.title}>{post.title}</h3>
                            <p className={styles.description}>
                                {post.description}
                            </p>
                        </div>

                        <div className={styles.icon}>
                            <AiOutlineClose onClick={handleDeletePost} />
                        </div>
                    </div>
                </div>
            ) : (
                <h1 className={styles.h1}>Створіть пост</h1>
            )}
        </>
    );
};

export default SelectedPost;
