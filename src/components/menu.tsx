"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import User from '../svgs/User.svg'
import Menu2 from '../svgs/menu2.svg'
import Mail from '../svgs/mail.svg'
import House from '../svgs/house.svg'

export default function Menu () {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const isActiveLink = (href: string) => {
        if (href === "/") {
            return pathname === "/";
        }
        return pathname.startsWith(href);
    };
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);  
    };

    return (
        <nav className="fixed items-center end-0 flex gap-y-4 bottom-0 top-0 z-60">
            <div className="pr-6">
                <div className="flex flex-col border border-white w-fit h-fit p-4 rounded-4xl gap-8 py-8 bg-white/10 hover:text-accent">
                    <Link href="/" onClick={() => setIsMenuOpen(false)}><House className={`size-6 hover:fill-red-400 ${isActiveLink("/") ? "fill-red-500" : "fill-white"}`}/></Link>
                    <Link href="/about"><User className={`size-6 hover:fill-red-400 ${isActiveLink("/about") ? "fill-red-500" : "fill-white"}`}/></Link>
                    <Link href="/work"><Menu2 className={`size-6 hover:fill-red-400 ${isActiveLink("/work") ? "fill-red-500" : "fill-white"}`}/></Link>
                    <Link href="/contact"><Mail className={`size-6 hover:fill-red-400 ${isActiveLink("/contact") ? "fill-red-500" : "fill-white"}`}/></Link>
                </div>
            </div>
        </nav>
    );
}