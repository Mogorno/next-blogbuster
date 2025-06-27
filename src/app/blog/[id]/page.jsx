import Image from 'next/image';
import React from 'react';
import testImg from 'public/jpg/anime1.jpeg';
import styles from './page.module.scss';
import AvatarBlock from '@/components/common/AvatarBlock/AvatarBlock';
import { notFound } from 'next/navigation';

async function getPost(id) {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
        next: { revalidate: 10 },
    });

    if (!res.ok) {
        return notFound();
    }

    return res.json();
}

export async function generateMetadata({ params }) {
    const post = await getPost(params.id);

    return {
        title: post.title,
        description: post.description,
    };
}

const BlogPost = async ({ params }) => {
    const post = await getPost(params.id);

    return (
        <div className={styles.container}>
            <div className={styles.preview}>
                <div className={styles.imgContainer}>
                    <Image
                        priority={true}
                        className={styles.img}
                        alt="Some text"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        fill={true}
                        src={post.img}
                    />
                </div>
                <div className={styles.previewContent}>
                    <div className={styles.info}>
                        <h1 className={styles.title}>{post.title}</h1>
                        <p className={styles.description}>{post.description}</p>
                    </div>

                    <AvatarBlock
                        alt={'testImg'}
                        user={post.user}
                        src={testImg}
                    />
                </div>
            </div>
            <div className={styles.text}>{post.content}</div>
        </div>
    );
};

export default BlogPost;
