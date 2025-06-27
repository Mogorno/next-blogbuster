import React from 'react';
import styles from './page.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Post from '@/components/common/Post/Post';

async function getData() {
    const res = await fetch('http://localhost:3000/api/posts', {
        cache: 'no-store',
    });

    if (!res.ok) {
        return notFound();
    }
    return res.json();
}

const Blog = async () => {
    const data = await getData();
    return (
        <div className={styles.containers}>
            {data.map((post) => (
                <Post key={post._id} post={post} />
            ))}
        </div>
    );
};

export default Blog;
