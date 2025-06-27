'use client';
import Link from 'next/link';
import React from 'react';
import styles from './navbar.module.scss';
import DarkModeToggle from '../common/DarkModeToggle/DarkModeToggle';
import { signOut, useSession } from 'next-auth/react';
import NavUser from '../common/NavUser/NavUser';

const links = [
    {
        id: 1,
        title: 'Home',
        url: '/',
    },
    {
        id: 2,
        title: 'Portfolio',
        url: '/portfolio',
    },
    {
        id: 3,
        title: 'Blog',
        url: '/blog',
    },
    {
        id: 4,
        title: 'About',
        url: '/about',
    },
    {
        id: 5,
        title: 'Contact',
        url: '/contact',
    },
    {
        id: 6,
        title: 'Dashboard',
        url: '/dashboard',
    },
];

export default function Navbar() {
    return (
        <div className={styles.container}>
            <Link className={styles.logo} href={links[0].url}>
                BlogBuster
            </Link>

            <div className={styles.links}>
                <DarkModeToggle />
                {links.map((link) => (
                    <Link className={styles.link} key={link.id} href={link.url}>
                        {link.title}
                    </Link>
                ))}
            </div>
            <NavUser />
        </div>
    );
}
