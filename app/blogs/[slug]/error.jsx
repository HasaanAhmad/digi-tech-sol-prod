'use client';
import Link from 'next/link';
export default function Error({ error }) {
    return (
        <div className="container mx-auto py-10 px-4">
            <h2 className="text-2xl font-bold">Error loading blog post</h2>
            <p>{error.message}</p>
            <Link href="/blogs">Go back to blogs</Link>
        </div>
    );
} 