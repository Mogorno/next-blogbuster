import connect from '@/utils/db';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import User from '@/models/User';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export const POST = async (request) => {
    const data = await request.formData();

    const userData = {
        name: data.get('name'),
        email: data.get('email'),
    };

    const password = data.get('password');

    const file = data.get('img');

    if (!file) {
        return NextResponse.json({ success: false });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uniqueFileName = Date.now() + '_' + file.name;
    const imgPath = path.join(process.cwd(), 'public/avatars', uniqueFileName);

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
        const imgURL = `/avatars/${uniqueFileName}`;
        userData.img = imgURL;
    } catch (error) {
        return NextResponse.json({
            success: false,
            error: 'Помилка запису файлу',
        });
    }

    const salt = 5;

    const hashedPassword = await bcrypt.hash(password, salt);

    userData.password = hashedPassword;

    try {
        await connect();

        const newUser = new User(userData);

        await newUser.save();
        return new NextResponse('User has been created', {
            status: 201,
        });
    } catch (error) {
        return new NextResponse(error.massage, {
            status: 500,
        });
    }
};
