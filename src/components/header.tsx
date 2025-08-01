"use client"
import Link from 'next/link';
import Github from '../svgs/github.svg'
import Instagram from '../svgs/instagram.svg'

export default function Header () {
    return (
        <header className="fixed top-4 left-0 right-0 z-60 bg-transparent border-b-3">
            <nav className="flex items-center justify-between px-8 py-4 max-w-screen-xl mx-auto text-white">
                <div>
                    <h2 className="text-2xl font-semibold tracking-widest select-none"><span className="text-3xl font-bold border-r-2 border-white pr-2">JJ</span> João <span className='text-red-500'>Melo</span></h2>
                </div>
                <div className="flex gap-4">
                    <Link href=""><Github className='fill-white scale-75 hover:fill-red-400 hover:-translate-y-1'/></Link>
                    <Link href=""><Instagram className='fill-white scale-75 hover:fill-red-400 hover:-translate-y-0.5'/></Link>
                </div>
            </nav>
        </header>
    );
}