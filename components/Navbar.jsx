"use client";

import Image from 'next/image'
import React, { useState } from 'react';
import logo from '@/public/assets/Logo.svg'
import logoMobile from '@/public/assets/logo-mobile.svg'
import flagIndonesia from '@/public/assets/flag-indonesia.svg'
import { IoIosArrowDown, IoIosSearch, IoIosMenu, IoIosClose } from "react-icons/io";
import { Divider } from 'antd';
import { AiOutlineHome } from "react-icons/ai";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Link from 'next/link';
import useSidebarStore from '@/zustand/useSidebarStore';

function Navbar() {
    const { isSidebarOpen, openSidebar, closeSidebar } = useSidebarStore();

    return (
        <section className='bg-[#282828] py-5'>
            <div className='md:wrapper md:px-[120px] wrapper-mobile'>
                <div className='flex items-center justify-between'>
                    <div className='md:block hidden'>
                        <Link href='/'>
                            <Image
                                src={logo}
                                alt='logo'
                                width={200}
                                height={50}
                            />
                        </Link>
                    </div>
                    <div className='md:hidden block'>
                        <Link href='/'>
                            <Image
                                src={logoMobile}
                                alt='logo'
                                width={140}
                                height={50}
                            />
                        </Link>
                    </div>
                    <div className='flex items-center'>
                        <IoIosSearch color='fff' size={24} />
                        <button className="md:hidden ml-3" onClick={openSidebar}>
                            <IoIosMenu size={30} color="white" />
                        </button>
                        <div className='ml-6 mr-4 hidden md:block'>
                            <Divider className='bg-[#3E3E3E] h-10' type='vertical' />
                            <Divider className='bg-[#3E3E3E] h-10' type='vertical' />
                            <Divider className='bg-[#3E3E3E] h-10' type='vertical' />
                            <Divider className='bg-[#3E3E3E] h-10' type='vertical' />
                        </div>
                        <div className='md:flex items-center hidden'>
                            <Image
                                src={flagIndonesia}
                                alt='logo'
                            />
                            <strong className='text-white pr-[19px] font-plus-jakarta-sans'>
                                ID
                                <span className='text-[#949494] font-normal'>-ID</span>
                            </strong>
                            <IoIosArrowDown size={16} color='white' />
                        </div>
                    </div>
                </div>
            </div>
            <Divider className='bg-[#3E3E3E] hidden md:block' type='horizontal' />
            <div className='wrapper hidden md:block'>
                <div className="flex items-center justify-between">
                    <ul className='flex items-center gap-4 font-space-grotesk'>
                        <Link
                            href='/'
                            className='text-white flex items-center gap-2 text-sm font-normal'>
                            <AiOutlineHome size={16} color='white' />
                            Beranda
                        </Link>
                        <Link
                            href='/order-tracker'
                            className='text-white flex items-center gap-2 text-sm font-normal'>
                            <IoIosSearch size={16} color='white' />
                            Lacak Pesanan
                        </Link>
                    </ul>
                    <MdKeyboardDoubleArrowRight size={24} color='white' />
                </div>
            </div>

            {/* Overlay untuk menutup sidebar saat di-klik */}
            <div className={`overlay ${isSidebarOpen ? 'open' : ''}`} onClick={closeSidebar}></div>

            {/* Sidebar untuk mobile */}
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <button className="text-white p-4 flex justify-end w-full" onClick={closeSidebar}>
                    <IoIosClose size={30} />
                </button>
                <ul className='flex flex-col items-start gap-4 p-4 font-space-grotesk'>
                    <Link
                        href='/'
                        className='text-white flex items-center gap-2 text-sm font-normal'>
                        <AiOutlineHome size={16} color='white' />
                        Beranda
                    </Link>
                    <Link
                        href='/order-tracker'
                        className='text-white flex items-center gap-2 text-sm font-normal'>
                        <IoIosSearch size={16} color='white' />
                        Lacak Pesanan
                    </Link>
                </ul>
                <div className='flex items-center px-4'>
                    <Image
                        src={flagIndonesia}
                        alt='logo'
                    />
                    <strong className='text-white pr-[19px] font-plus-jakarta-sans'>
                        ID
                        <span className='text-[#949494] font-normal'>-ID</span>
                    </strong>
                    <IoIosArrowDown size={16} color='white' />
                </div>
            </div>
        </section>
    )
}

export default Navbar;
