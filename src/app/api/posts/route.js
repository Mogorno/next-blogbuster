import { NextResponse } from 'next/server';
import Post from '@/models/Post';
import connect from '@/utils/db';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export const GET = async (request) => {
    const url = new URL(request.url);

    const userId = url.searchParams.get('user');

    try {
        await connect();
        const posts = await Post.find(userId && { user: userId });
        return new NextResponse(JSON.stringify(posts), { status: 200 });
    } catch (error) {
        return new NextResponse('Database ERROR', { status: 500 });
    }
};

export const POST = async (request) => {
    const data = await request.formData();

    const postData = {
        title: data.get('title'),
        description: data.get('description'),
        user: data.get('user'),
        content: data.get('content'),
    };

    const file = data.get('img');

    if (!file) {
        return NextResponse.json({ success: false });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uniqueFileName = Date.now() + '_' + file.name;
    const imgPath = path.join(process.cwd(), 'public/images', uniqueFileName);

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
        const imgURL = `/images/${uniqueFileName}`;
        postData.img = imgURL;
    } catch (error) {
        return NextResponse.json({
            success: false,
            error: 'Помилка запису файлу',
        });
    }

    try {
        await connect();
        const newPost = new Post(postData);
        await newPost.save();
        return new NextResponse('Post has been created.', { status: 201 });
    } catch (error) {
        return new NextResponse('Database ERROR', { status: 500 });
    }
};
