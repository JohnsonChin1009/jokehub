"use client"

import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className='px-4 py-3 text-white pixel-font bg-[#fcefc7] flex justify-between items-center'>
            <Link href="/">
                <Image 
                    src="/logo.png"
                    alt="Logo"
                    width={300}
                    height={200}
                />            
            </Link>
            <div className='hidden md:flex gap-5 items-center'>
                <Link href="/login">
                    <Button>LOG IN</Button>
                </Link>
                <Link href="/signup">
                    <Button>SIGN UP</Button>
                </Link>
            </div>
            <div className='md:hidden'>
                <button onClick={toggleMenu} className='focus:outline-none'>
                    {isOpen ? (
                        <button>test1</button>
                        // <IoMdClose className="w-9 h-9 text-white" />
                    ) : (
                        <button>test2</button>

                        // <IoMdMenu className="w-9 h-9 text-white" />
                    )}
                </button>
            </div>
            {isOpen && (
                <div className='absolute top-12 left-0 right-0 bg-[#282646] p-4 flex flex-col items-center md:hidden'>
                    <Link href="/login" className='w-full'>
                        <Button className='w-full mt-2'>LOG IN</Button>
                    </Link>
                    <Link href="/signup" className='w-full'>
                        <Button className='w-full mt-2'>SIGN UP</Button>
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Header;