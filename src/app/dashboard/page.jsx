'use client';
import React, { useState } from 'react';
import useSWR from 'swr';
import styles from './page.module.scss';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import PostEditor from '@/components/common/PostEditor/PostEditor';
import Post from '@/components/common/Post/Post';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Dashboard = () => {
    const [selectImg, setSelectImg] = useState('');
    const [postData, setPostData] = useState({
        title: '',
        description: '',
        content: '',
    });

    const session = useSession();

    const router = useRouter();

    const [editPost, setEditPost] = useState(null);

    const { data, error, mutate, isLoading } = useSWR(
        `/api/posts?user=${session?.data?.user.id}`,
        fetcher
    );

    if (session.status === 'loading') {
        return <p>Loading...</p>;
    }

    if (session.status === 'unauthenticated') {
        router?.push('/dashboard/login');
    }

    if (session.status === 'authenticated') {
        return (
            <div className={styles.container}>
                <PostEditor
                    mutate={mutate}
                    session={session}
                    editPost={editPost}
                    setEditPost={setEditPost}
                    selectImg={selectImg}
                    setSelectImg={setSelectImg}
                    postData={postData}
                    setPostData={setPostData}
                />
                <div className={styles.posts}>
                    {isLoading === 'loading' ? (
                        <div>...Loading</div>
                    ) : (
                        data?.map((post) => (
                            <Post
                                setEditPost={setEditPost}
                                key={post._id}
                                post={post}
                                mutate={mutate}
                                session={session}
                                setSelectImg={setSelectImg}
                                setPostData={setPostData}
                            />
                        ))
                    )}
                </div>
            </div>
        );
    }

    return <div>Error</div>;
};

export default Dashboard;
