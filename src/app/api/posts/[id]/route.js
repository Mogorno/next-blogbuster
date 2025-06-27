import { NextResponse } from 'next/server';
import Post from '@/models/Post';
import connect from '@/utils/db';
import { writeFile, mkdir, unlink } from 'fs/promises';
import path from 'path';

export const GET = async (request, { params }) => {
    const { id } = params;
    try {
        await connect();

        const posts = await Post.findById(id).populate('user');

        return new NextResponse(JSON.stringify(posts), { status: 200 });
    } catch (error) {
        return new NextResponse('Database ERROR', { status: 500 });
    }
};

export const DELETE = async (request, { params }) => {
    const { id } = params;

    try {
        await connect();

        await Post.findByIdAndDelete(id);

        return new NextResponse('Post has been deleted', { status: 200 });
    } catch (error) {
        return new NextResponse('Database ERROR', { status: 500 });
    }
};

export const PATCH = async (request, { params }) => {
    const { id } = params;

    try {
        await connect();

        const post = await Post.findById(id);
        if (!post) {
            return new NextResponse('Post not found', { status: 404 });
        }

        const data = await request.formData();

        const postData = {
            title: data.get('title'),
            description: data.get('description'),
            user: data.get('user'),
            content: data.get('content'),
        };
        const file = data.get('img');

        const addNewImg = async (file, oldImg) => {
            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes);

            const uniqueFileName = Date.now() + '_' + file.name;
            const imgPath = path.join(
                process.cwd(),
                'public/images',
                uniqueFileName
            );

            try {
                await mkdir(path.dirname(imgPath), { recursive: true });
            } catch (error) {
                return NextResponse.json({
                    success: false,
                    error: 'Помилка створення теки',
                });
            }

            try {
                await writeFile(imgPath, buffer);

                if (oldImg) {
                    const imgOldPath = path.join(
                        process.cwd(),
                        'public',
                        oldImg
                    );
                    try {
                        await unlink(imgOldPath);
                    } catch (error) {
                        console.error('Error deleting old image', error);
                    }
                }

                const imgURL = `/images/${uniqueFileName}`;
                return imgURL;
            } catch (error) {
                return NextResponse.json({
                    success: false,
                    error: 'Помилка запису файлу',
                });
            }
        };

        if (file !== null) {
            post.img = await addNewImg(file, post.img);
        }

        post.title = postData.title;
        post.description = postData.description;
        post.user = postData.user;
        post.content = postData.content;

        await post.save();

        return new NextResponse('Post has been updated', { status: 200 });
    } catch (error) {
        return new NextResponse('Database ERROR', { status: 500 });
    }
};
